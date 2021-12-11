const express =require('express');

const app = express();
const ExpressError = require("./expressError");

app.listen(3000, () => {
    console.log("You are on port 3000")
});