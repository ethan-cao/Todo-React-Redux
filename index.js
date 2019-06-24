const path = require('path');
const express = require("express"); 

// start app
var app = express();

console.log("@@@ path: " + path.join(__dirname, 'client', 'build'));

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  res.send("deployed");
});

// EB runs NodeJS application at port 8081 by default 
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log("Server listening at port " + port);
});