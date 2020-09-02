const path = require("path");

module.exports = function(app) {
    // get route for home or anything besides exercise or stats page
    app.get("/", function(req, res) { 
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // get route for exercise html
    app.get("/exercise", function(req, res) { 
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    //get route for stats html
    app.get("/stats", function(req, res) { 
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

}