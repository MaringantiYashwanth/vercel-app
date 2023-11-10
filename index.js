const { log } = require("console");
const express = require("express");
const app = express();
const PORT = 4000;

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well.");
});

app.listen(PORT, () => {
  log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app;
const express = require("express");

const app1 = express();

app1.get("/", (req, res) => res.send("Home Page Route"));

app1.get("/about", (req, res) => res.send("About Page Route"));

app1.get("/portfolio", (req, res) => res.send("Portfolio Page Route"));

app1.get("/contact", (req, res) => res.send("Contact Page Route"));

const port = process.env.PORT || 3000;

app1.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
