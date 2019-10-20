//require express
const express = require("express");
//assign variable to express for ease of use
const app = express();
//port assignment
const PORT = process.env.PORT || 8080;
//encodes and allows extended urls
app.use(express.urlencoded({ extended: true }));
//allows express to handle json files
app.use(express.json());

//requires server side js files
require("./routes/apiRoutes")(app);
//requires the js files manipulating the html files needed
require("./routes/htmlRoutes")(app);

//listens for port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
