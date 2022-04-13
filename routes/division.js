const divisionRoutes = require('express').Router();

const { createDivision, getAllDivisions, deleteDivision } = require('../controllers/division');

// Routes
divisionRoutes.post('/create', createDivision);
divisionRoutes.post('/all', getAllDivisions);
divisionRoutes.post('/delete', deleteDivision);

module.exports = divisionRoutes;
