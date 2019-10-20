const friendData = require("../data/friends.js");
module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.json(friendData);
  });
  app.post("api/clear", function(request, response) {
    friendData.push(req.body);
  });
};
