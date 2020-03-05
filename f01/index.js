const exp = require("express");

var app = exp();
var fecha= new Date();
var hora_actual = fecha.getHours();
var minu = fecha.getMinutes();

app.get("/time",(request,response)=>{
	response.send("<html>"+hora_actual+":"+minu+"</html>");
});

app.listen(80);
console.log("server ready");