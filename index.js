const express = require('express');
const cfg = require('./cfg');
var app = express();

// Middlewares
app.use(express.json());
// Routes
app.use(require('./routes/routes'));


app.listen(cfg.port,()=>{
  console.log("SERVER EN CORRIENDO EN PUESTO: " + cfg.port);
})
