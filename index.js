var express = require('express');

// start app
var app = express();

// dynamic port binding, picked from Heroku, fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

app.use(express.json()); // assign to req.body