'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const exphbs = require("express-handlebars");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});