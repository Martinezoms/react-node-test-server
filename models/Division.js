const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Division = db.define('divisions', {
  sectorId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
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

module.exports = Division;
