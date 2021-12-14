const express = require("express");
// const router = express.Router();
const Router = require('express').Router;
const router = new Router();
const db = require("../db");

router.get("/", async (req, res)=> {
    const results = await db.query(`SELECT * FROM products`);
    return res.json(results.row)
}); 

module.exports = router;