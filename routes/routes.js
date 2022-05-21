const express = require("express");

const app = express.Router();

const negocioController = require("../controllers/empleado/negocio.controller");
/* const personaController = require("../controllers/empleado/persona.controller");
const rolController = require("../controllers/empleado/rol.controller");
const areaController = require("../controllers/empleado/area.controller");
const areaNegocioController = require("../controllers/empleado/areaNegocio.controller");
const empleadoController = require("../controllers/empleado/empleado.controller"); */

app.get("/", function (req, res) {
    res.status(200)
        .send(
            "INICIO"
        );
});

module.exports = app;

/** ----------NEGOCIO ----------- */
app.post("/negocio/list", negocioController.findAll);
app.post("/negocio/save", negocioController.save);
app.post("/negocio/update", negocioController.update);
app.post("/negocio/delete", negocioController.delete);

