const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const User = db.define('user', {
  id: {
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: false
  },
  division: {
    type: DataTypes.STRING,
    allowNull: false
  },
  group: {
    type: DataTypes.STRING,
    allowNull: false
  },
  class: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = User;
