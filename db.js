const { process } = require('ipaddr.js');
const {Client} = require('pg') ;
// DB_URI is the var we will be using
let DB_URI;

if (process.env.NODE_ENV ==="test") {
// The above allows for a test the below allows 2 
// different db to run based on the data.sql name
    DB_URI = 'postgresql:///productsdb_test';
} else {
    DB_URI = "postgresql:///productsdb";
}

let db = new Client({
    connectionString: DB_URI
});

db.connect();

module.exports = db;