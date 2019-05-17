const express = require("express"); 
var bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

// start app
var app = express();


app.get('/', (req, res) => {
  res.send("deployed");
});

app.listen(port, () => {
  console.log("Server listening at port " + port);
});

app.use(express.json()); // assign to req.body