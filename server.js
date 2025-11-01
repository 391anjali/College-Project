

const express = require ('express')

const app = express()
app.use(function(req , res ,next){
  console.log("hhhhhh");
next();

});

app.get("/cute", function(req, res) {
  res.send("Hello i'm nothing");
})
app.get("/", function(req, res) {
  res.send("Hello ");
})
app.listen(4000);

