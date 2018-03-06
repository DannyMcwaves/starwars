let express = require('express'),
    logger = require('morgan'),
    cookie_parser = require("cookie-parser"),
    method_override = require("method-override"),
    compression = require('compression'),
    body_parser = require("body-parser"),
    errorhandler = require("errorhandler"),
    session = require("express-session"),
    path = require("path"),
    routes = require("./routes/index"),

    // instantiating the express application.
    app = express();

// configuring the application information: response formats, name
// templates to use, the current mode of the app. ie; development || production
// and other setting the app has to depend on.
app.set("appName", "ats_frontend");
app.set("x-powered-by", false);
app.set("env", "production");
app.set("view engine", "html");
app.set("views", path.join(__dirname, "build"));
app.set("view cache", app.get("env") === "production");
app.set("json spaces", 4);
app.set("jsonp callback name", "cb");


// DEVELOPER MODE
// configuring middlewares to parse the data on the request, // bodyParser
// log the request // logger
// compress the response //compression
// provide response to all methods even non standard ones // method_override
// use cookies and sessions in the requests and the response
app.use(logger("dev"));
app.use(compression({threshold: 1}));
app.use(body_parser.json({strict: false, limit: 5000}));
app.use(body_parser.urlencoded({limit: 10000, extended: true}));
app.use(method_override("_method"));
app.use(cookie_parser("this is used for constructing cookies for a particular project."));
app.use(session({key: "_sessId", secret: "jkqhrqnuthvnwusviwivhguvovnewk", resave: true, saveUninitialized: true}));

// configuring the middlewares routes to respond to STATIC GET REQUESTS from the client.
// GET static contents from the server using this middleware setups.
app.use("/favicon.ico", express.static("build/images.jpeg"));
app.use("/fonts", express.static("build/"));
app.use("/static",  express.static("build/static"));
app.use("/js", express.static("build/js"));
app.use("/css", express.static("build/css"));
app.use("/build", express.static("build"));
app.use("/public", express.static("build"));
app.use("/service-worker.js", express.static("build/service-worker.js"));

// ROUTE the GETS, POSTS, PUTS, DELETES request that are coming to the server.
app.get("*", routes.home);

// if anything fails, such as 404 or Internal server error, let this error handler take care of it for us.
app.use(errorhandler());


module.exports = app;
