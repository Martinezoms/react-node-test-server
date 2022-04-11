const classRoutes = require('express').Router();

const { getClass, createClass, getAllClasses, deleteClass } = require('../controllers/class');

// Routes
classRoutes.post('/create', createClass);
classRoutes.get('/one', getClass);
classRoutes.get('/all', getAllClasses);
classRoutes.delete('/delete', deleteClass);

module.exports = classRoutes;
