"use strict";

const { urlencoded } = require("express"),
    homeController = require("./controllers/homeController"),
    port = 3000,
    express = require("express"),
    app = express();

app.set("port", process.env.port || 3000);
app.set("view engine", "ejs");

/*
app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    console.log("veggy");
    res.send(`this is the page for vegetable ${veg}`)
});abc
*/
app.use(express.urlencoded({
    extended: false
})
);
//
app.use(express.json());
app.get("/items/:vegetable", homeController.sendReqParams);
app.get("/name/", homeController.)
app.post("/",
    (req, res) => {
        console.log(req.body);
        console.log(req.query);
        res.send("POST Succesful!");
    });

app.listen(port, () => {
    console.log(`APP started on port ${port}`);
});


    //
/* const
    express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts"),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController");

app.set("view engine", "ejs");
app.use(layouts);
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
    console.log(req.params); console.log(req.body); console.log(req.url); console.log(req.query);
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
*/
