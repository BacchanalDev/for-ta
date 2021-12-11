const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (res, req)=> {
    const results = await db.query(`SELECT * FROM products`);
    return res.json(results.row)
}); 