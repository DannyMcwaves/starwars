
// this routes are for the home.
// including all the database settings.


const express = require("express"),
    router = express.Router();

router
    .get("/",  (req, res) => {
        res.sendFile("index.html", {root: __dirname + '/../build'});
    });

module.exports = router;
