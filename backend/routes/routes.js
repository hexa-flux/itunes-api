// Import controllers
const { search } = require('../controllers/controllers');

const searchRoutes = (app) => {
    // Example: GET /api/itunes/search?term=adele&limit=10
    app.get('api/itunes/search', search);
}

module.exports = {
    searchRoutes
}