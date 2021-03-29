const { User } = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ Error: error });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const userfound = await User.findById(id);
    res.json(userfound);
  } catch (error) {
    res.json({ Message: "Not Users Found !!!" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const userSaved = await user.save();
    res.json(userSaved);
  } catch (error) {
    res.json({ Message: "Not User Created !!!" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    res.json({ Message: "Not User Found !!!" });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.json({ Message: "Not User Found !!!" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
