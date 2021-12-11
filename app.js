const express =require('express');

const app = express();
const ExpressError = require("./expressError");

app.use(express.json());

const uRoutes = require("./routes/products");
app.use("products", uRoutes);

app.use(function(req, res, next){
    const err = new ExpressError("Not found", 404)

    //pass err to the next middleware
    return next(err);
});


app.use(function(err, req, res, next){
    //the default status is 500 for Internal error
    let status = err.status || 500;

    //set the status and alert the user
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });

});

app.listen(3000, () => {
    console.log("You are now Rockking on port 3000")
});