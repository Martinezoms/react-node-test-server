const classRoutes = require('express').Router();

const { getClass, createClass, getAllClasses, deleteClass, deleteAllClasses } = require('../controllers/class');

// Routes
classRoutes.post('/create', createClass);
classRoutes.post('/all', getAllClasses);
classRoutes.post('/delete', deleteClass);
classRoutes.post('/deleteAll', deleteAllClasses);

module.exports = classRoutes;
