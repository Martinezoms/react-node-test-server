const Sector = require('../models/Sector');
const sequelize = require('sequelize');

exports.createSector = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(401).json({ error: true, message: 'Name cannot be empty' });
  }

  // Check for exisiting sector with same name
  const currentSector = await Sector.findAll({
    where: {
      name: {
        [sequelize.Op.iLike]: name.toLowerCase()
      }
    }
  });

  if (currentSector.length) {
    return res.status(401).json({ error: true, message: 'Sector with this name already exists' });
  }

  try {
    const newSector = await Sector.create({
      name,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    if (newSector) {
      return res.status(200).json({
        success: true,
        sectorId: newSector.id,
        name,
        message: 'Sector created successfully'
      });
    }
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};

exports.getAllSectors = async (req, res) => {
  try {
    const sectors = await Sector.findAll();

    return res.status(200).json({
      success: true,
      data: [...sectors],
      message: 'Sectors fetch successful'
    });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};
