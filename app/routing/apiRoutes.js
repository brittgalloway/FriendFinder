const friendData = require("../data/friends.js");
const path = require("path");
module.exports = function(app) {
  app.get("/api/survey", function(req, res) {
    res.json(friendData);
  });
  app.post("/api/survey", function(req, res) {
    friendData.push(req.body);
  });
};
