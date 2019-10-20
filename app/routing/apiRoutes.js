const friendData = require("../data/friends.js");
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.json(friendData);
  });
};
