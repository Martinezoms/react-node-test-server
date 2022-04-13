const Division = require('../models/Division');
const sequelize = require('sequelize');

exports.createDivision = async (req, res) => {
  const { name, sectorId } = req.body;

  if (!sectorId) {
    return res.status(401).json({ error: true, message: 'Sector Id is required' });
  }

  if (!name) {
    return res.status(401).json({ error: true, message: 'Name cannot be empty' });
  }

  // Check for exisiting division with same name
  const currentDivision = await Division.findAll({
    where: {
      sectorId,
      name: {
        [sequelize.Op.iLike]: name.toLowerCase()
      }
    }
  });

  if (currentDivision.length > 0) {
    return res.status(401).json({ error: true, message: 'Division with this name already exists' });
  }

  try {
    const newDivision = await Division.create({
      name,
      sectorId,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return res
      .status(200)
      .json({ success: true, divisionId: newDivision.id, name, message: 'Division created successfully' });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};

exports.getAllDivisions = async (req, res) => {
  const { sectorId } = req.body;

  if (!sectorId) {
    return res.status(401).json({ error: true, message: 'Sector Id is required' });
  }

  try {
    const divisions = await Division.findAll({
      where: {
        sectorId
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Divisions fetch successfully',
      data: [...divisions]
    });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};

exports.deleteDivision = async (req, res) => {
  const { id, sectorId } = req.body;

  if (!id) {
    return res.status(401).json({ error: true, message: 'Division Id is required' });
  }

  if (!sectorId) {
    return res.status(401).json({ error: true, message: 'Sector Id is required' });
  }

  try {
    await Division.destroy({
      where: { id, sectorId }
    });

    return res.status(200).json({
      success: true,
      message: 'Division deleted successfully'
    });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};
