let express = require('express'),
    logger = require('morgan'),
    compression = require('compression'),
    errorhandler = require("errorhandler"),
    path = require("path"),
    routes = require("./routes/home"),

    // instantiating the express application.
    app = express();

// configuring the application information: response formats, name
// templates to use, the current mode of the app. ie; development || production
// and other setting the app has to depend on.
app.set("appName", "swapis");
app.set("x-powered-by", false);
app.set("env", "production");
app.set("view engine", "html");
app.set("views", path.join(__dirname, "build"));
app.set("view cache", app.get("env") === "production");
app.set("json spaces", 4);
app.set("jsonp callback name", "cb");


// log the request // logger
// compress the response //compression
app.use(logger("dev"));
app.use(compression({threshold: 1}));

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
app.get("*", routes);

// if anything fails, such as 404 or Internal server error, let this error handler take care of it for us.
app.use(errorhandler());


module.exports = app;
