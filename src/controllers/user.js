const express = require("express");
const User = require("../models/user");
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  await User.find()
    .then((users) => res.json(users))
    .catch((error) => res.json({ Error: error }));
});

module.exports = userRouter;

/*
 
export const getUserById: RequestHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = req.params.id;
  try {
    const userfound = await User.findById(id);
    res.json(userfound);
  } catch (error) {
    res.json({ Message: "Not Users Found !!!" });
  }
};

export const createUser: RequestHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const user = new User(req.body);
    const userSaved = await user.save();
    res.json(userSaved);
  } catch (error) {
    res.json({ Message: "Not User Created !!!" });
  }
};

export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    res.json({ Message: "Not User Found !!!" });
  }
};

export const updateUser: RequestHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
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

 */
