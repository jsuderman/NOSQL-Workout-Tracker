const Workout = require("../models/workout");

module.exports = function(app) {
// get user data from workout table
    app.get("/workout", (req, res) => {
        Workout.find({})
        .then(Workout => {
            res.json(Workout);
         })
        .catch(err => {
            res.json(err);
        });
    });


app.post("/workout", (req, res) => {
    Workout.create()
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
    });

}