const express = require("express");

const app = express.Router();

const negocioController = require("../controllers/empleado/negocio.controller");
const areaController = require("../controllers/empleado/area.controller");
const areaNegocioController = require("../controllers/empleado/areaNegocio.controller");
const clienteController = require("../controllers/empleado/cliente.controller");
const empleadoController = require("../controllers/empleado/empleado.controller");
const proveedorController = require("../controllers/empleado/proveedor.controller");
const rolController = require("../controllers/empleado/rol.controller");
const sedeController = require("../controllers/empleado/sede.controller");

const detalleMaterialController = require("../controllers/construccion/detalleMaterial.controller");
const faseController = require("../controllers/construccion/fase.controller");
const manoObraController = require("../controllers/construccion/manoObra.controller");
const materialController = require("../controllers/construccion/material.controller");
const obraController = require("../controllers/construccion/obra.controller");
const tipoMaterialController = require("../controllers/construccion/tipoMaterial.controller");
const tipoObraController = require("../controllers/construccion/tipoObra.controller");

const detalleExtraccionController = require("../controllers/plantas/detalleExtraccion.controller");
const detalleProcesoController = require("../controllers/plantas/detalleProceso.controller");
const extraccionController = require("../controllers/plantas/extraccion.controller");
const maquinariaController = require("../controllers/plantas/maquinaria.controller");
const materiaPrimaController = require("../controllers/plantas/materiaPrima.controller");
const procesoController = require("../controllers/plantas/proceso.controller");
const tipoMaquinariaController = require("../controllers/plantas/tipoMaquinaria.controller");
const tipoMateriaPrimaController = require("../controllers/plantas/tipoMateriaPrima.controller");

const asignacionController = require("../controllers/transporte/asignacion.controller");
const cargamentoController = require("../controllers/transporte/cargamento.controller");
const comprobanteController = require("../controllers/transporte/comprobante.controller");
const tipoVehiculoController = require("../controllers/transporte/tipoVehiculo.controller");
const vehiculoController = require("../controllers/transporte/vehiculo.controller");
const viajeController = require("../controllers/transporte/viaje.controller");

const categoriaController = require("../controllers/ventas/categoria.controller");
const detalleAlquilerController = require("../controllers/ventas/detalleAlquiler.controller");
const detalleVentaController = require("../controllers/ventas/detalleVenta.controller");
const facturaController = require("../controllers/ventas/factura.controller");
const productoController = require("../controllers/ventas/producto.controller");
const tipoAlquilerController = require("../controllers/ventas/tipoAlquiler.controller");
const tipoPagoController = require("../controllers/ventas/tipoPago.controller");


app.get("/", function (req, res) {
    res.status(200)
        .send(
            "INICIO"
        );
});

module.exports = app;

/** ----------EMPLEADO ----------- */
app.post("/negocio/list", negocioController.findAll);
app.post("/negocio/save", negocioController.save);
app.post("/negocio/update", negocioController.update);
app.post("/negocio/delete", negocioController.delete);

app.post("/area/list", areaController.findAll);
app.post("/area/save", areaController.save);
app.post("/area/update", areaController.update);
app.post("/area/delete", areaController.delete);

app.post("/areaNegocio/list", areaNegocioController.findAll);
app.post("/areaNegocio/save", areaNegocioController.save);
app.post("/areaNegocio/update", areaNegocioController.update);
app.post("/areaNegocio/delete", areaNegocioController.delete);

app.post("/cliente/list", clienteController.findAll);
app.post("/cliente/save", clienteController.save);
app.post("/cliente/update", clienteController.update);
app.post("/cliente/delete", clienteController.delete);
app.post("/cliente/listByNegocio", clienteController.findAllByNegocio);

app.post("/empleado/list", empleadoController.findAll);
app.post("/empleado/listByRolByArea", empleadoController.findAllByRolArea);
app.post("/empleado/save", empleadoController.save);
app.post("/empleado/update", empleadoController.update);
app.post("/empleado/delete", empleadoController.delete);

app.post("/proveedor/list", proveedorController.findAll);
app.post("/proveedor/save", proveedorController.save);
app.post("/proveedor/update", proveedorController.update);
app.post("/proveedor/delete", proveedorController.delete);

app.post("/rol/list", rolController.findAll);
app.post("/rol/save", rolController.save);
app.post("/rol/update", rolController.update);
app.post("/rol/delete", rolController.delete);

app.post("/sede/list", sedeController.findAll);
app.post("/sede/save", sedeController.save);
app.post("/sede/update", sedeController.update);
app.post("/sede/delete", sedeController.delete);




/**CONSTRUCCION */
app.post("/detalleMaterial/list", detalleMaterialController.findAll);
app.post("/detalleMaterial/save", detalleMaterialController.save);
app.post("/detalleMaterial/update", detalleMaterialController.update);
app.post("/detalleMaterial/delete", detalleMaterialController.delete);

app.post("/fase/list", faseController.findAll);
app.post("/fase/save", faseController.save);
app.post("/fase/update", faseController.update);
app.post("/fase/delete", faseController.delete);

app.post("/manoObra/list", manoObraController.findAll);
app.post("/manoObra/save", manoObraController.save);
app.post("/manoObra/update", manoObraController.update);
app.post("/manoObra/delete", manoObraController.delete);

app.post("/material/list", materialController.findAll);
app.post("/material/save", materialController.save);
app.post("/material/update", materialController.update);
app.post("/material/delete", materialController.delete);

app.post("/obra/list", obraController.findAll);
app.post("/obra/save", obraController.save);
app.post("/obra/update", obraController.update);
app.post("/obra/delete", obraController.delete);

app.post("/tipoMaterial/list", tipoMaterialController.findAll);
app.post("/tipoMaterial/save", tipoMaterialController.save);
app.post("/tipoMaterial/update", tipoMaterialController.update);
app.post("/tipoMaterial/delete", tipoMaterialController.delete);

app.post("/tipoObra/list", tipoObraController.findAll);
app.post("/tipoObra/save", tipoObraController.save);
app.post("/tipoObra/update", tipoObraController.update);
app.post("/tipoObra/delete", tipoObraController.delete);



/**PLANTAS */
app.post("/detalleExtraccion/list", detalleExtraccionController.findAll);
app.post("/detalleExtraccion/save", detalleExtraccionController.save);
app.post("/detalleExtraccion/update", detalleExtraccionController.update);
app.post("/detalleExtraccion/delete", detalleExtraccionController.delete);

app.post("/detalleProceso/list", detalleProcesoController.findAll);
app.post("/detalleProceso/save", detalleProcesoController.save);
app.post("/detalleProceso/update", detalleProcesoController.update);
app.post("/detalleProceso/delete", detalleProcesoController.delete);

app.post("/extraccion/list", extraccionController.findAll);
app.post("/extraccion/save", extraccionController.save);
app.post("/extraccion/update", extraccionController.update);
app.post("/extraccion/delete", extraccionController.delete);

app.post("/maquinaria/list", maquinariaController.findAll);
app.post("/maquinaria/save", maquinariaController.save);
app.post("/maquinaria/update", maquinariaController.update);
app.post("/maquinaria/delete", maquinariaController.delete);

app.post("/materiaPrima/list", materiaPrimaController.findAll);
app.post("/materiaPrima/save", materiaPrimaController.save);
app.post("/materiaPrima/update", materiaPrimaController.update);
app.post("/materiaPrima/delete", materiaPrimaController.delete);

app.post("/proceso/list", procesoController.findAll);
app.post("/proceso/save", procesoController.save);
app.post("/proceso/update", procesoController.update);
app.post("/proceso/delete", procesoController.delete);

app.post("/tipoMaquinaria/list", tipoMaquinariaController.findAll);
app.post("/tipoMaquinaria/save", tipoMaquinariaController.save);
app.post("/tipoMaquinaria/update", tipoMaquinariaController.update);
app.post("/tipoMaquinaria/delete", tipoMaquinariaController.delete);

app.post("/tipoMateriaPrima/list", tipoMateriaPrimaController.findAll);
app.post("/tipoMateriaPrima/save", tipoMateriaPrimaController.save);
app.post("/tipoMateriaPrima/update", tipoMateriaPrimaController.update);
app.post("/tipoMateriaPrima/delete", tipoMateriaPrimaController.delete);







/**TRANSPORTE */
app.post("/asignacion/list", asignacionController.findAll);
app.post("/asignacion/save", asignacionController.save);
app.post("/asignacion/update", asignacionController.update);
app.post("/asignacion/delete", asignacionController.delete);

app.post("/cargamento/list", cargamentoController.findAll);
app.post("/cargamento/save", cargamentoController.save);
app.post("/cargamento/update", cargamentoController.update);
app.post("/cargamento/delete", cargamentoController.delete);

app.post("/comprobante/list", comprobanteController.findAll);
app.post("/comprobante/save", comprobanteController.save);
app.post("/comprobante/update", comprobanteController.update);
app.post("/comprobante/delete", comprobanteController.delete);

app.post("/tipoVehiculo/list", tipoVehiculoController.findAll);
app.post("/tipoVehiculo/save", tipoVehiculoController.save);
app.post("/tipoVehiculo/update", tipoVehiculoController.update);
app.post("/tipoVehiculo/delete", tipoVehiculoController.delete);

app.post("/vehiculo/list", vehiculoController.findAll);
app.post("/vehiculo/save", vehiculoController.save);
app.post("/vehiculo/update", vehiculoController.update);
app.post("/vehiculo/delete", vehiculoController.delete);

app.post("/viaje/list", viajeController.findAll);
app.post("/viaje/save", viajeController.save);
app.post("/viaje/update", viajeController.update);
app.post("/viaje/delete", viajeController.delete);


/**VENTAS */
app.post("/categoria/list", categoriaController.findAll);
app.post("/categoria/save", categoriaController.save);
app.post("/categoria/update", categoriaController.update);
app.post("/categoria/delete", categoriaController.delete);

app.post("/detalleAlquiler/list", detalleAlquilerController.findAll);
app.post("/detalleAlquiler/save", detalleAlquilerController.save);
app.post("/detalleAlquiler/update", detalleAlquilerController.update);
app.post("/detalleAlquiler/delete", detalleAlquilerController.delete);

app.post("/detalleVenta/list", detalleVentaController.findAll);
app.post("/detalleVenta/save", detalleVentaController.save);
app.post("/detalleVenta/update", detalleVentaController.update);
app.post("/detalleVenta/delete", detalleVentaController.delete);

app.post("/factura/list", facturaController.findAll);
app.post("/factura/save", facturaController.save);
app.post("/factura/update", facturaController.update);
app.post("/factura/delete", facturaController.delete);
app.post("/factura/listAlquiler", facturaController.findAllAlquiler);
app.post("/factura/saveAlquiler", facturaController.saveAllAlquiler);

app.post("/producto/list", productoController.findAll);
app.post("/producto/save", productoController.save);
app.post("/producto/update", productoController.update);
app.post("/producto/delete", productoController.delete);

app.post("/tipoAlquiler/list", tipoAlquilerController.findAll);
app.post("/tipoAlquiler/save", tipoAlquilerController.save);
app.post("/tipoAlquiler/update", tipoAlquilerController.update);
app.post("/tipoAlquiler/delete", tipoAlquilerController.delete);

app.post("/tipoPago/list", tipoPagoController.findAll);
app.post("/tipoPago/save", tipoPagoController.save);
app.post("/tipoPago/update", tipoPagoController.update);
app.post("/tipoPago/delete", tipoPagoController.delete);