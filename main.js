"use strict";
// hi

// xxx
const
    express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts"),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController");

app.set("view engine", "ejs");
app.use(layouts);
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(express.static("public"));
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server Started and Listening on Port ${app.get("port")}!`);
});

