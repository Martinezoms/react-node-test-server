const userRoutes = require('express').Router();

const { getUser, editUser, createUser } = require('../controllers/user');

// Routes
userRoutes.post('/create', createUser);
userRoutes.get('/', getUser);
userRoutes.put('/edit', editUser);

module.exports = userRoutes;
