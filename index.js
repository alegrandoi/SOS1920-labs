const coo1 = require("cool-ascii-faces");
const express = require ("express");
var app =express();
app.listen(80);

app.get("/cool",(resquest,response) =>{
	response.send("<html>cool()</html>");
});

console.log(coo1());

