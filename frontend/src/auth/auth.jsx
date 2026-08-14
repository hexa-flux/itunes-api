const TOKEN_KEY = "token";

export function parseJwt(token) {
  if (!token) return null;
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export function setAuthToken(token) {
  if (token) sessionStorage.setItem(TOKEN_KEY, token);
  else sessionStorage.removeItem(TOKEN_KEY);
}

export function getAuthToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function clearAuth() {
  sessionStorage.removeItem(TOKEN_KEY);
}

export function getAuthClaims() {
  const token = getAuthToken();
  if (!token) return null;
  try {
    return parseJwt(token);
  } catch {
    return null;
  }
}