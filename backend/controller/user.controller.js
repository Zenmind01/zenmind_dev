const UserServices = require("../services/user.service");
const UserModel = require("../models/user.model");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if(!email && !password) {
      throw new Error("Enter Valid Credential")
    }

    const successRes = await UserServices.registerUser(name, email, password);

    return res.json({ status: true, message: successRes });
  } catch (error) {
    return res.status(501).json({ status: false, message: error.toString() });
  }
};

exports.login = async (req, res, next) => {
  try {
    
    const { password, email } = req.body;

    if (!email && !password) {
      throw new Error("Parameter are not correct");
    }

    const user = await UserServices.getUserByEmail(email);

    if (!user) {
      throw new Error( "user does not exist" );
    }
    
    const isPasswordCorrect = await user.comparePassword(password);
    if (isPasswordCorrect === false) {
      throw new  Error("password or username wrong");
    }
    // Creating Token
    let tokenData;
    tokenData = { _id: user._id, email: user.email };

    const token = await UserServices.generateAccessToken(
      tokenData,
      "secret",
      "1h"
    );
    return res.status(200).json({ status: true, success: user, token: token });
  } catch (error) {
    console.log(error.toString())
    return res.status(501).json({ status: false, message: error.toString() });
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
      res.json({ status: true, message: "user not found" });
    }

    return res.json({
      success: true,
      data: updatedUser,
      message: "User updated!",
    });
  } catch (ex) {
    //console.log(ex)
    return res.status(501).json({ success: false, message: ex });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);

    return res.json({ success: true, data: user, message: "here you go" });
  } catch (error) {
    return res.status(501).json({ success: false, message: error });
  }
};
