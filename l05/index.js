const express = require("express");
const bodyParser = require("body-parser");
const dataStore = require("nedb");
const path = require("path");
const app = express();
const gretingApi= require(path.join(__dirname,"./gretingAPI"));

const port = process.env.PORT || 80;
app.use(bodyParser.json());
const dbFileName = path.join(__dirname,"./contacts.db");

const db = new dataStore({
		filename: dbFileName,
		autoload: true
});


gretingApi(app,db);



app.listen(port, () => {
	console.log("Server ready");
});

console.log("Starting server...");