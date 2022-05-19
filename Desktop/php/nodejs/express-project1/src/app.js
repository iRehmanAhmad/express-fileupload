const exp = require("constants");
const express = require("express");
const { appendFileSync } = require("fs");
const path = require("path");
const hbs = require("hbs");
require("./db/connection");
const user = require("./models/userModel");
const async = require("hbs/lib/async");
const notifier = require('node-notifier');
const app = express();
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

// Middleware
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")))
app.use(express.static(staticpath));
console.log(path.join(__dirname, "../node_modules/jquery/dist"));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/",(req, res)=>{
    res.render("index");
})
app.post("/contact", async(req, res)=>{
try {
   
    const userData = new user(req.body);
    await userData.save();
    notifier.notify("Response saved");
    res.render("index");

} catch (error) {
    res.status(500).send(error);
}
})

app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`);
})