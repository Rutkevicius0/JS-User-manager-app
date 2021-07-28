const express = require('express');

const router = express.Router();

const User = require('../models/UserModel');

router.get('/users', async (req, res) => {
  try {
    const result = await User.find();
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/users/new', async (req, res) => {
  try {
    const newUser = new User(req.body);
    let savedUser = newUser.save();
    res.json({ success: true, newUser: savedUser });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
});

router.delete('/users/delete/:id', async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.json({ deleteSuccessful: true, deletedUser: result });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/users/edit/:id', async (req, res) => {
  try {
    result = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ updateSuccessful: true, updatedUser: result });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
