const express = require("express");

const app = express.Router();

const negocioController = require("../controllers/usuarios/negocio.controller");
const personaController = require("../controllers/usuarios/persona.controller");
const rolController = require("../controllers/usuarios/rol.controller");
const areaController = require("../controllers/usuarios/area.controller");
const areaNegocioController = require("../controllers/usuarios/areaNegocio.controller");
const empleadoController = require("../controllers/usuarios/empleado.controller");

app.get("/", function (req, res) {
    res.status(200)
        .send(
            "INICIO"
        );
});

module.exports = app;

/** ----------NEGOCIO ----------- */
app.get("/negocio/list", negocioController.findAll);
app.post("/negocio/save", negocioController.save);
app.put("/negocio/update/:idNegocio", negocioController.update);
app.post("/negocio/delete", negocioController.delete);

/** ----------PERSONA ----------- */
app.get("/persona/list", personaController.findAll);
app.post("/persona/save", personaController.save);
app.put("/persona/update/:idPersona", personaController.update);
app.post("/persona/delete", personaController.delete);

/** ----------ROL ----------- */
app.get("/rol/list", rolController.findAll);
app.post("/rol/save", rolController.save);
app.put("/rol/update/:idRol", rolController.update);
app.post("/rol/delete", rolController.delete);

/** ----------AREA ----------- */
app.get("/area/list", areaController.findAll);
app.post("/area/save", areaController.save);
app.put("/area/update/:idArea", areaController.update);
app.post("/area/delete", areaController.delete);

/** ----------AREA NEGOCIO ----------- */
app.get("/areaNegocio/list", areaNegocioController.findAll);
app.post("/areaNegocio/save", areaNegocioController.save);
app.put("/areaNegocio/update/:idAreaNegocio", areaNegocioController.update);
app.post("/areaNegocio/delete", areaNegocioController.delete);

/** ----------EMPLEADO ----------- */
app.get("/empleado/list", empleadoController.findAll);
app.post("/empleado/save", empleadoController.save);
app.put("/empleado/update/:idEmpleado", empleadoController.update);
app.post("/empleado/delete", empleadoController.delete);