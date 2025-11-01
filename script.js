const express = require ("express");
const app = express();
app.set("view engine", "ejs");//to set ejs file ans see in the browser
app.use(express .static('./public'));//to use static file css and js
//error handling middleware

app.get("/",function (req, res) {
  //res.send(`Profile page of ${req.params.username}`);
  res.render("anjali", {name: "you"});
 
});
//to error handling 


app.listen(8000);