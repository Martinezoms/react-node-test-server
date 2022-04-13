const User = require('../models/User');
const validator = require('validator');

exports.createUser = async (req, res) => {
  // Get request body
  const { name, sector, division, group, agreement } = req.body;

  // Validate request body
  if (validator.isEmpty(name)) {
    return res.status(400).json({ error: true, message: 'Name cannot be empty' });
  }

  if (validator.isEmpty(sector)) {
    return res.status(400).json({ error: true, message: 'Sector cannot be empty' });
  }

  if (validator.isEmpty(division)) {
    return res.status(400).json({ error: true, message: 'Division cannot be empty' });
  }

  if (validator.isEmpty(group)) {
    return res.status(400).json({ error: true, message: 'Group cannot be empty' });
  }

  if (validator.isEmpty(agreement)) {
    return res.status(400).json({ error: true, message: 'Please agree to terms' });
  }

  // create new user
  try {
    const user = await User.create({
      name,
      sector,
      division,
      group,
      class: req.body.class,
      agreement: JSON.parse(agreement),
      createdAt: new Date(),
      updatedAt: new Date()
    });

    const userInfo = {
      id: user.id,
      name: user.name,
      sector: user.sector,
      division: user.division,
      group: user.group,
      class: user.class
    };

    res.status(200).json({
      success: true,
      userInfo,
      message: 'Saved successfully!'
    });
  } catch (error) {
    res.status(400).json({ error: true, message: 'An error occured' });
  }
};

exports.getUser = async (req, res) => {
  const id = req.body;
  const user = await User.findOne({ where: id });

  if (user === null) {
    res.status(401).json({ error: true, message: 'User does not exist' });
  } else {
    res.status(200).json({
      success: true,
      message: 'Get user info successful',
      user: {
        id: user.id,
        name: user.name,
        sector: user.sector,
        division: user.division,
        group: user.group,
        class: user.class
      }
    });
  }
};

exports.editUser = async (req, res) => {
  const { id, name, sector, division, group, agreement } = req.body;

  if (!id) {
    return res.status(401).json({ error: true, message: 'User Id is required' });
  }

  const user = await User.findOne({
    where: { id }
  });

  if (!user) {
    return res.status(401).json({ error: true, message: 'User not found' });
  }

  try {
    const user = await User.update(
      { name, sector, division, group, class: req.body.class, agreement, updatedAt: new Date() },
      {
        where: { id }
      }
    );

    const userInfo = {
      id: user.id,
      name: user.name,
      sector: user.sector,
      division: user.division,
      group: user.group,
      class: user.class
    };

    return res.status(200).json({
      success: true,
      userInfo,
      message: 'User updated'
    });
  } catch (error) {
    return res.status(401).json({ error: true, message: 'An error occurred' });
  }
};
