import express from "express";

const app = express();
const port = process.env.PORT || 3000;
  
app.get('/',function(req,res)
{
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
    console.log('Updated : Server listening at port %d', port);
  }); 
