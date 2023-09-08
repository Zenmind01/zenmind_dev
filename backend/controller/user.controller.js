const UserServices = require("../services/user.service");
const UserModel = require("../models/user.model");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const successRes = await UserServices.registerUser(name, email, password);

    res.json({ status: true, message: successRes });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    
    const { password, email } = req.body;

    if (!email && !password) {
      throw new Error("Parameter are not correct");
    }

    let user = await UserServices.getUserByEmail(email);

    if (!user) {
      throw new Error("User does not exist");
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (isPasswordCorrect === false) {
      throw new Error(`Username or Password does not match`);
    }
    // Creating Token
    let tokenData;
    tokenData = { _id: user._id, email: user.email };

    const token = await UserServices.generateAccessToken(
      tokenData,
      "secret",
      "1h"
    );
    res.status(200).json({ status: true, success: "sendData", token: token });
  } catch (error) {
    console.log(error, "err---->");
    next(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      updateData,
      { new: true }
    );

    if (!updatedUser) {
      throw "user not found!";
    }

    return res.json({
      success: true,
      data: updatedUser,
      message: "User updated!",
    });
  } catch (ex) {
    //console.log(ex)
    return res.json({ success: false, message: ex });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);

    return res.json({ success: true, data: user, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};
