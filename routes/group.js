const groupRoutes = require('express').Router();

const { getGroup, createGroup, getAllGroups, deleteGroup } = require('../controllers/group');

// Routes
groupRoutes.post('/create', createGroup);
groupRoutes.get('/one', getGroup);
groupRoutes.get('/all', getAllGroups);
groupRoutes.delete('/delete', deleteGroup);

module.exports = groupRoutes;
