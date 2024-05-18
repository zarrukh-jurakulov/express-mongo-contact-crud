const express = require('express');
const { getAll, create, getOne, update, deleteOne } = require('../controllers');

const contactRoutes = express.Router();

contactRoutes.post('/', create);
contactRoutes.get('/', getAll);
contactRoutes.get('/:id', getOne);
contactRoutes.put('/:id', update);
contactRoutes.delete('/:id', deleteOne);

module.exports = contactRoutes;
