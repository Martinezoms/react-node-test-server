const { createSector, getSector, getAllSectors } = require('../controllers/sector');

const sectorRoutes = require('express').Router();

// Routes
sectorRoutes.post('/create', createSector);
sectorRoutes.get('/one', getSector);
sectorRoutes.get('/all', getAllSectors);

module.exports = sectorRoutes;
