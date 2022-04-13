const { getUser, editUser, createUser } = require('../controllers/user');
const userRoutes = require('express').Router();

// Routes
userRoutes.post('/create', createUser);
userRoutes.post('/', getUser);
userRoutes.post('/edit', editUser);

module.exports = userRoutes;
