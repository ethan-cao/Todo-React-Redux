const path = require('path');
const express = require("express"); 

var app = express();

// EB runs NodeJS application at port 8081 by default 
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log("Server listening at port " + port);
});

// Router
app.get("/test", (req, res) => {
  res.send("App deployed.");
});

// if request is not recognized, look into pre-built resource in client/build
const staticPath = path.join(__dirname, 'client', 'build');
app.use(express.static(staticPath));
console.log("@@@ path: " + staticPath );

