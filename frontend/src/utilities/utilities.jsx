export const RESULTS_CACHE_KEY = 'itunes_results_v1';
export const LAST_QUERY_KEY = 'itunes_last_query_v1';

/* Results cache helpers */
export function saveResultsToSession(results, lastQuery) {
  try {
    sessionStorage.setItem(RESULTS_CACHE_KEY, JSON.stringify(results));
    if (lastQuery !== undefined) {
      sessionStorage.setItem(LAST_QUERY_KEY, JSON.stringify(lastQuery));
    }
  } catch (e) {
    // ignore storage errors (quota, private mode)
    console.warn('Failed to save search results to sessionStorage', e);
  }
}

export function loadResultsFromSession() {
  try {
    const raw = sessionStorage.getItem(RESULTS_CACHE_KEY);
    const q = sessionStorage.getItem(LAST_QUERY_KEY);
    return {
      results: raw ? JSON.parse(raw) : null,
      lastQuery: q ? JSON.parse(q) : null,
    };
  } catch (e) {
    console.warn('Failed to read search results from sessionStorage', e);
    return { results: null, lastQuery: null };
  }
}

/* Central favourites helper */
export function toggleFavourite(item) {
  if (!item.trackId) return null;

  const raw = localStorage.getItem("favourites");
  const favouritesList = raw ? JSON.parse(raw) : [];

  const exists = favouritesList.some((f) => (f.trackId) === item.trackId);
  const next = exists
    ? favouritesList.filter((f) => (f.trackId) !== item.trackId) // remove if item exists
    : [...favouritesList, item]; // Add new item

  localStorage.setItem("favourites", JSON.stringify(next));
  window.dispatchEvent(new Event("local-storage"));
  return next;
}

/* Release year helper */
// Parse year from UTC release date format
export function getYearFromIso(releaseDate, { fallback = "—" } = {}) {
  if (!releaseDate || typeof releaseDate !== "string") return fallback;
  const ts = Date.parse(releaseDate);
  if (Number.isNaN(ts)) return fallback;
  return String(new Date(ts).getUTCFullYear());
}

/* Rating helpers */

// Single canonical map: rating token -> numeric score (higher = more restrictive)
export const RATING_SCORE = {
  // International / common for film/TV
  'UNRATED': 0,
  'G': 0,
  'PG': 1,
  'TV-PG': 1,
  'PG-13': 2,
  'PG13': 2,
  'TV-14': 2,
  'M': 3,
  'MA': 4,
  'TV-MA': 4,
  'MA15': 4,
  'MA15+': 4,
  'R': 5,
  'R18': 6,
  'R18+': 6,
  'NC-17': 7,

   // Music explicitness tokens (Apple observed)
  'NOTEXPLICIT': 0,   // clean / non-explicit
  'CLEANED': 0,       // sometimes used to indicate edited/clean version
  'EXPLICIT': 5,      // mark as high (arbitrary high value to treat as "restricted")
};

// Default thresholds
export const DEFAULT_M_THRESHOLD = 3; // corresponds to 'M'
export const DEFAULT_EXPLICIT_THRESHOLD = 1; // anything > 0 considered explicit

// Normalization helper
function normalizeToken(raw) {
  if (!raw || typeof raw !== 'string') return '';
  return raw.trim().replace(/\s+/g, '').toUpperCase(); // collapse spaces, uppercase
}

/**
 * Get numeric score for a token, or undefined if unknown.
 */
export function getRatingScore(raw) {
  const token = normalizeToken(raw);
  return Object.prototype.hasOwnProperty.call(RATING_SCORE, token)
    ? RATING_SCORE[token]
    : undefined;
}

/**
 * Generic threshold test (used for M-or-above or explicit)
 * Returns `true` when token's score >= threshold.
 * Unknown tokens return false by default.
 */
export function isAtOrAbove(rawToken, { threshold = DEFAULT_M_THRESHOLD } = {}) {
  const score = getRatingScore(rawToken);
  if (typeof score !== 'number') return false;
  return score >= threshold;
}

/**
 * Specific helper for music explicitness.
 * Returns true when `trackExplicitness` is considered explicit.
 */
export function isExplicit(rawExplicitToken, { threshold = DEFAULT_EXPLICIT_THRESHOLD } = {}) {
  return isAtOrAbove(rawExplicitToken, { threshold });
}

/* Duration formatting helper 
 *  - "1h 45m"  (hours + minutes)
 *  - "30m"     (minutes only)
 *  - "45s"     (seconds only)
 * Returns '-' for invalid/null/undefined inputs.
*/
export function formatDuration(ms) {
  // treat null/undefined/NaN/non-finite/negative as invalid
  if (ms == null || !isFinite(ms) || ms < 0) return '-';

  const absMs = Math.abs(ms);
  const hours = Math.floor(absMs / 3600000);
  const minutes = Math.floor((absMs % 3600000) / 60000);
  const seconds = Math.floor((absMs % 60000) / 1000);

  if (hours > 0) {
    // show hours and minutes (omit minutes if zero)
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  }
  if (minutes > 0) {
    return `${minutes}m`;
  }
  return `${seconds}s`;
}

/**
 * Format milliseconds into "M:SS" (or "H:MM:SS" if >= 1 hour).
 * Returns '-' for null/undefined/NaN/non-finite/negative.
 *
 * Examples:
 *  formatTrackTime(3_500)       -> "3:30"
 *  formatTrackTime(4 * 60_000 + 15_000) -> "4:15"
 *  formatTrackTime(1*3600_000 + 4*60_000 + 15_000) -> "1:04:15"
 */
export function formatTrackTime(ms) {
  if (ms == null || !isFinite(ms) || ms < 0) return '-';

  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const twoDigit = (n) => n.toString().padStart(2, '0');

  if (hours > 0) {
    // H:MM:SS (hours no padding)
    return `${hours}:${twoDigit(minutes)}:${twoDigit(seconds)}`;
  }

  // M:SS (minutes no padding)
  return `${minutes}:${twoDigit(seconds)}`;
}

/**
 * Small helper to validate a URL string for use in hrefs.
 * Returns the input string if it looks like an http(s) URL, otherwise null.
 */
export function safeHttpUrl(url) {
  if (typeof url !== "string") return null;
  // Basic validation: starts with http:// or https://
  return /^https?:\/\//i.test(url) ? url : null;
}

/* Helper to change artwork/thumbnail resolution */
export function artworkWithSize(url, size = 600) {
  if (!url || typeof url !== 'string') return url;
  // replace trailing "/100x100bb.jpg" or "/60x60bb.jpg" with new size
  try {
    return url.replace(/\/\d+x\d+([^\s/]*)$/, `/${size}x${size}$1`);
  } catch (e) {
    return url;
  }
}