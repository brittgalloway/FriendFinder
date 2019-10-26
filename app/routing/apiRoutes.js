const friendData = require("../data/friends.js"); //
//console.log(friendData)
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
      matchDifference: 100
    };
    let difference = match.matchDifference;
    for (let friend = 0; friend < friendData.length; friend++) {
      difference = 0;
      console.log(friend);
      for (let score = 0; score < friendData[friend].scores.length; score++) {
        difference += Math.abs(
          parseInt(newScore[score]) - friendData[friend].scores[score]
        );
        console.log("difference: " + difference);
        if (difference <= match.matchDifference) {
          match.name = friendData[friend].name;
          match.photo = friendData[friend].photo;
          match.matchDifference = friendData[friend].difference;
        }
      }
    }
    console.log("match:" + match.name);
    console.log("match:" + match.matchDifference);
    console.log("difference: " + difference);

    friendData.push(newFriend);
    res.json(match);
  });
};
