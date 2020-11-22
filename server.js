// Requiring necessary npm packages
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// static folder
app.use(express.static(path.join(__dirname, "public")));

// API Route
require("./routes/api-routes.js")(app);

// Index route
app.get("/", (req, res) => res.render("index", { layout: "main" }));

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
