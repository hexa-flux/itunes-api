const fetch = require('node-fetch'); // fetch() function

function buildItunesUrl({ term, country = 'us', media = 'music', limit = 20 }) {
  const params = new URLSearchParams({
    term,
    country,
    media,
    limit: String(limit)
  });
  return `https://itunes.apple.com/search?${params.toString()}`;
}

// Example search
const search = async (req, res) => {
  const { term } = req.query;
  if (!term) return res.status(400).json({ error: 'term query parameter is required' });

  const country = req.query.country || 'us';
  const media = req.query.media || 'music';
  const limit = Math.min(Number(req.query.limit) || 20, 200);

  const url = buildItunesUrl({ term, country, media, limit });

  try {
    const response = await fetch(url, { headers: { 'User-Agent': 'itunes-proxy/1.0' } });
    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: 'upstream error', details: text });
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('iTunes fetch error', err);
    res.status(502).json({ error: 'bad gateway' });
  }
};

module.exports = {
    search
}