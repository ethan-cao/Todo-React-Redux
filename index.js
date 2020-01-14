const path = require('path');
const express = require("express"); 

const app = express();
const port = process.env.PORT || 8081;

// EB runs NodeJS application at port 8081 by default 
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
// console.log("@@@ path: " + staticPath );

