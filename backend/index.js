const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Create express server instance and enable CORS
const app = express();
app.use(cors());

// Set up req.body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import routes
// const { loginRoute, taskRoute } = require("./routes/routes");

// loginRoute(app);
// taskRoute(app);

// Initialize server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
