// Import controllers
const { issueToken, search } = require("../controllers/controllers");

const { requireAuth } = require("../middleware/middleware");

const searchRoutes = (app) => {
  // Public token issuance endpoint
  app.get("/api/auth/token", issueToken);

  // Example: GET /api/itunes/search?term=adele&limit=10
  app.get("/api/itunes/search", requireAuth, search);
};

module.exports = {
  searchRoutes,
};
