const Group = require('../models/Group');
const sequelize = require('sequelize');

exports.createGroup = async (req, res) => {
  const { name, divisionId } = req.body;

  if (!divisionId) {
    return res.status(401).json({ error: true, message: 'Division Id is required' });
  }

  if (!name) {
    return res.status(401).json({ error: true, message: 'Name cannot be empty' });
  }

  // Check for exisiting group with same name
  const currentGroup = await Group.findAll({
    where: {
      divisionId,
      name: {
        [sequelize.Op.iLike]: name.toLowerCase()
      }
    }
  });

  if (currentGroup.length > 0) {
    return res.status(401).json({ error: true, message: 'Group with this name already exists' });
  }

  try {
    const newGroup = await Group.create({
      name,
      divisionId,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return res.status(200).json({ success: true, groupId: newGroup.id, name, message: 'Group created successfully' });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};

exports.getAllGroups = async (req, res) => {
  const { divisionId } = req.body;

  if (!divisionId) {
    return res.status(401).json({ error: true, message: 'Division Id is required' });
  }

  try {
    const groups = await Group.findAll({
      where: {
        divisionId
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Groups fetch successfully',
      data: [...groups]
    });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};

exports.deleteGroup = async (req, res) => {
  const { id, divisionId } = req.body;

  if (!id) {
    return res.status(401).json({ error: true, message: 'Group Id is required' });
  }

  if (!divisionId) {
    return res.status(401).json({ error: true, message: 'Division Id is required' });
  }

  try {
    await Group.destroy({
      where: { id, divisionId }
    });

    return res.status(200).json({
      success: true,
      message: 'Division deleted successfully'
    });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};

exports.deleteAllGroups = async (req, res) => {
  const { divisionId } = req.body;

  if (!divisionId) {
    return res.status(401).json({ error: true, message: 'Division Id is required' });
  }

  const groups = await Group.findAll({ where: { divisionId } });
  if (groups) {
    try {
      groups.forEach(async (group) => await group.destroy());

      return res.status(200).json({ success: true, groups: [...groups], message: 'Groups deleted succesfully' });
    } catch (error) {
      return res.status(401).json({ error: true, message: 'An error occured' });
    }
  }
};
