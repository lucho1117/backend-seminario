/************************************************************************
 * IMPORTS
 ************************************************************************/
 const { findAll, save, update, deleteById, findAllAlquiler, saveAllAlquiler } = require('../../services/ventas/factura.services');
 const responsesServices = require('../../responses/responses.services');
 
 /************************************************************************
  * MESSAGES
  ************************************************************************/
  const { errorMessages, successMessages } = require("../../messages/es");
 
 /************************************************************************
  * CONTROLLERS
  ************************************************************************/
 
 exports.findAll = async (req, res) => {
    let obj = req.body;
     const result = await findAll(obj);
 
     if (result.valid) {
         res.status(200).send(
             responsesServices.success((data=result.data), msg=successMessages.SUCCESS_FINDALL));
     } else {
         res.status(400).send(
             responsesServices.error((msg = errorMessages.ERROR_FIND)));
     }
 };
 
 exports.save = async (req, res) => {
     
     let obj = req.body;
     // Guardar
     const result = await save(obj);
    
     //validar proceso exitoso
     if (result.valid) {
         //retornar mensaje de exito
         res.status(200).send(responsesServices.success((data = result.data), (msg = result.msg)));
     } else {
         //retornar mensaje de error
         res.status(200).send(responsesServices.error((msg = errorMessages.ERROR_ADD)));
     }
 
 };
 
 exports.update = async (req, res) => {
     let obj = req.body;
     const result = await update(obj);
 
     //validar proceso exitoso
     if (result.valid) {
        //retornar mensaje de exito
        res.status(200).send(responsesServices.success((data = result.data[0]), (msg = successMessages.SUCCESS_UPDATE)));
     } else {
         //retornar mensaje de error
         res.status(200).send(responsesServices.error((msg = errorMessages.ERROR_UPDATE)));
     }
 
 };
 
 exports.delete = async (req, res) => {
     //realizar logica del negocio
     let obj = req.body;
     const result = await deleteById(obj);
 
     //validar proceso exitoso
     if (result.valid) {
        res.status(200).send(responsesServices.success((data = result.data[0]), (msg = successMessages.SUCCESS_DELETE)));
     } else {
         //retornar mensaje de error
         res.status(200).send(responsesServices.error((msg = errorMessages.ERROR_DELETE)));
     }
 };

 exports.findAllAlquiler = async (req, res) => {
    let obj = req.body;
     const result = await findAllAlquiler(obj);
 
     if (result.valid) {
         res.status(200).send(
             responsesServices.success((data=result.data), msg=successMessages.SUCCESS_FINDALL));
     } else {
         res.status(400).send(
             responsesServices.error((msg = errorMessages.ERROR_FIND)));
     }
 };

 exports.saveAllAlquiler = async (req, res) => {
     
    let obj = req.body;
    // Guardar
    const result = await saveAllAlquiler(obj);
   
    //validar proceso exitoso
    if (result.valid) {
        //retornar mensaje de exito
        res.status(200).send(responsesServices.success((data = result.data), (msg = result.msg)));
    } else {
        //retornar mensaje de error
        res.status(200).send(responsesServices.error((msg = errorMessages.ERROR_ADD)));
    }

};