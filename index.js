
const express = require('express');
var app = express();

const cfg = require("./cfg.js");


// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/routes'));

// Starting the server
app.listen(cfg.port, () => {
  console.log(`Server on port ${cfg.port}`);
});
