const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");
const compression = require("compression");
const logger = require("./middlewares/logger");

const app = express();
const PORT = process.env.PORT || 5000;

app.use([logger, compression()]);
app.use(cors());
app.use(bodyParser.json());

// Use task routes
app.use("/api/tasks", taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
