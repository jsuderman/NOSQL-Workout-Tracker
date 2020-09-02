const Workout = require("../models/workout");
// const db = require("../models");
const { mongo } = require("mongoose");

module.exports = function(app) {
// get user data from workout table

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
// get route to populate stats
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
        
        .then(Workout => {
            console.log(Workout)
            res.json(Workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

// post route to create workout
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then(newWorkout => res.json(newWorkout))
        
        .catch(err => {
            res.json(err);
        })
    });
// put route to update a users workout
    app.put("/api/workouts/:id", ({ body, params} , res) => {
        console.log(params.id)
        Workout.findByIdAndUpdate(
            params.id,
            
            { $push: { exercises: body } },
            { new: true, runValidators: true } 
        ) 
        .then(updatedWorkout => res.json(updatedWorkout))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })

    });
        
    
    
}