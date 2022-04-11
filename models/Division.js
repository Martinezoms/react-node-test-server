const {DataTypes} = require('sequelize')
const db = require('../utils/db')

const Division = db.define("division", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  sectorId: {
    type: DataTypes.STRING,
    allowNull: true;
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
})

module.exports = Division
