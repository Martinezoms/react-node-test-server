const { createSector, getAllSectors } = require('../controllers/sector');

const sectorRoutes = require('express').Router();

// Routes
sectorRoutes.post('/create', createSector);
sectorRoutes.get('/all', getAllSectors);

module.exports = sectorRoutes;
