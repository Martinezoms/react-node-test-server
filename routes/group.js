const groupRoutes = require('express').Router();

const { createGroup, getAllGroups, deleteGroup, deleteAllGroups } = require('../controllers/group');

// Routes
groupRoutes.post('/create', createGroup);
groupRoutes.post('/all', getAllGroups);
groupRoutes.post('/delete', deleteGroup);
groupRoutes.post('/deleteAll', deleteAllGroups);

module.exports = groupRoutes;
