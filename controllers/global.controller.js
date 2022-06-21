/************************************************************************
 * IMPORTS
 ************************************************************************/
const { totalEmpleadosArea, productosMasVendidos, productosMasAlquilados } = require('../services/global.services');
const responsesServices = require('../responses/responses.services');

const { errorMessages, successMessages } = require("../messages/es");

 /************************************************************************
  * CONTROLLERS
  ************************************************************************/

exports.totalEmpleadosArea = async (req, res) => {
   
    const result = await totalEmpleadosArea();
  
    if (result.valid) {
        res.status(200).send(
            responsesServices.success((data=result.data), msg=successMessages.SUCCESS_FINDALL));
    } else {
        res.status(400).send(
            responsesServices.error((msg = errorMessages.ERROR_FIND)));
    }
};

exports.productosMasVendidos = async (req, res) => {
   
    const result = await productosMasVendidos();
  
    if (result.valid) {
        res.status(200).send(
            responsesServices.success((data=result.data), msg=successMessages.SUCCESS_FINDALL));
    } else {
        res.status(400).send(
            responsesServices.error((msg = errorMessages.ERROR_FIND)));
    }
};

exports.productosMasAlquilados = async (req, res) => {
   
    const result = await productosMasAlquilados();
  
    if (result.valid) {
        res.status(200).send(
            responsesServices.success((data=result.data), msg=successMessages.SUCCESS_FINDALL));
    } else {
        res.status(400).send(
            responsesServices.error((msg = errorMessages.ERROR_FIND)));
    }
};