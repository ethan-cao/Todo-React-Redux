const path = require('path');
const express = require("express"); 

var app = express();

// EB runs NodeJS application at port 8081 by default 
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log("Server listening at port " + port);
});

const staticPath = path.join(__dirname, 'client', 'build');
// console.log("@@@ path: " + staticPath );
app.use(express.static(staticPath));

app.get("*", (req, res) => {
  res.send("deployed");
  // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
