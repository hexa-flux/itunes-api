const jwt = require('jsonwebtoken');

function issueToken(req, res) {
  // NOTE: In production you should protect this endpoint (API key, client certificate, etc.)
  // so that arbitrary clients can't request tokens.
  const secret = process.env.JWT_SECRET || "Fave-manager";
  const expiresIn = process.env.JWT_EXPIRES_IN || "8h";

  // Minimal token payload:
  const payload = {
    sub: "api-user",
    service: "itunes-proxy"
  };

  const token = jwt.sign(payload, secret, { algorithm: "HS256", expiresIn });

  res.json({ token });
}


function buildItunesUrl({ term, country = 'au', media = 'all', limit = 24 }) {
  const params = new URLSearchParams({
    term,
    country,
    media,
    limit: String(limit)
  });
  return `https://itunes.apple.com/search?${params.toString()}`;
}

// Search controller
const search = async (req, res) => {
  console.log('Search requested by:', req.user);
  const { term } = req.query;
  if (!term) return res.status(400).json({ error: 'term query parameter is required' });

  const country = req.query.country || 'us';
  const media = req.query.media || 'music';
  
  const requestedLimit = Number(req.query.limit) || 24;
  const limit = Math.min(requestedLimit, 24); // never request more than 24

  const url = buildItunesUrl({ term, country, media, limit });

  try {
    const response = await fetch(url, { headers: { 'User-Agent': 'itunes-proxy/1.0' } });
    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: 'upstream error', details: text });
    }
    
    const data = await response.json();

    // Defensive server-side cap: ensure no more than 24 items are returned
    if (Array.isArray(data.results) && data.results.length > 24) {
      data.results = data.results.slice(0, 24);
      if (typeof data.resultCount === "number") {
        data.resultCount = data.results.length;
      }
    }

    res.json(data);
  } catch (err) {
    console.error('iTunes fetch error', err);
    res.status(502).json({ error: 'bad gateway' });
  }
};

module.exports = {
    issueToken,
    search
}