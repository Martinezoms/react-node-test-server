const Class = require('../models/Class');

exports.createClass = async (req, res) => {
  const { name, groupId } = req.body;

  if (!groupId) {
    return res.status(401).json({ error: true, message: 'Group Id is required' });
  }

  if (!name) {
    return res.status(401).json({ error: true, message: 'Name cannot be empty' });
  }

  // Check for exisiting class with same name
  const currentClass = await Class.findAll({
    where: {
      groupId,
      name: {
        [sequelize.Op.iLike]: name.toLowerCase()
      }
    }
  });

  if (currentClass.length > 0) {
    return res.status(401).json({ error: true, message: 'Class with this name already exists' });
  }

  try {
    const newClass = await Class.create({
      name,
      groupId,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return res.status(200).json({ success: true, classId: newClass.id, name, message: 'Class created successfully' });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};

exports.getClass = async (req, res) => {
  const { id, groupId } = req.body;

  if (!id) {
    return res.status(401).json({ error: true, message: 'Class Id is required' });
  }

  if (!groupId) {
    return res.status(401).json({ error: true, message: 'Division Id is required' });
  }

  try {
    const existingClass = await Class.findOne({
      where: { id, groupId }
    });

    if (!existingClass) {
      return res.status(401).json({ error: true, message: 'Class does not exist' });
    }

    return res.status(200).json({
      success: true,
      data: existingClass,
      message: 'Class info fetched successfully'
    });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};

exports.getAllClasses = async (req, res) => {
  const { groupId } = req.body;

  if (!groupId) {
    return res.status(401).json({ error: true, message: 'Group Id is required' });
  }

  try {
    const classes = await Class.findAll({
      where: {
        groupId
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Classes fetch successfully',
      data: [...classes]
    });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};

exports.deleteClass = async (req, res) => {
  const { id, groupId } = req.body;

  if (!id) {
    return res.status(401).json({ error: true, message: 'Class Id is required' });
  }

  if (!groupId) {
    return res.status(401).json({ error: true, message: 'Group Id is required' });
  }

  try {
    await Class.destroy({
      where: { id, groupId }
    });

    return res.status(200).json({
      success: true,
      message: 'Class deleted successfully'
    });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};
