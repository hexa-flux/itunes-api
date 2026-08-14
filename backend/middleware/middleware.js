const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  // Read Authorization header: "Bearer <token>"
  const auth = req.headers.authorization || "";
  const m = auth.match(/^Bearer\s+(.+)$/i);
  if (!m) {
    return res.status(401).json({ message: "Missing Authorization token" });
  }

  const token = m[1];
  const secret = process.env.JWT_SECRET || "Fave-manager";

  try {
    // Verify token and attach decoded payload to req.user
    const payload = jwt.verify(token, secret, { algorithms: ["HS256"] });
    req.user = payload; // <-- attach for downstream controllers
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = {
    requireAuth
};