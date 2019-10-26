const friendData = require("../data/friends.js");
module.exports = function(app) {
  app.get("/api/survey", function(req, res) {
    res.json(friendData);
  });
  app.post("/api/survey", function(req, res) {
    const newFriend = req.body;
    const newScore = newFriend.scores;

    let match = {
      name: "",
      photo: "",
      matchDifference: 1
    };
    let difference = match.matchDifference;
    for (let friend = 0; friend < friendData.length; friend++) {
      difference = 0;

      for (let score = 0; score < friendData[friend].scores.length; score++) {
        difference += Math.abs(
          parseInt(newScore[score]) - friendData[friend].scores[score]
        );

        if (difference <= match.matchDifference) {
          match.name = friendData[friend].name;
          match.photo = friendData[friend].photo;
          match.matchDifference = friendData[friend].difference;
        }
      }
    }

    friendData.push(newFriend);
    res.json(match);
  });
};
