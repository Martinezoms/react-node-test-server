const divisionRoutes = require('express').Router();

const { createDivision, getDivision, getAllDivisions, deleteDivision } = require('../controllers/division');

// Routes
userRoutes.post('/create', createDivision);
divisionRoutes.get('/one', getDivision);
divisionRoutes.get('/all', getAllDivisions);
divisionRoutes.delete('/delete', deleteDivision);

module.exports = divisionRoutes;
