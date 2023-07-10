import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  try {
    const existinUser = await userModel.findOne({ email: req.body.email });
    // validation

    if (existinUser) {
      return res.status(200).send({
        success: true,
        message: "User already exists",
      });
    }
    // hashing password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //rest datat

    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send({
      user,
      success: true,
      message: "User registered sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register api",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    //check role
    if (user.role !== req.body.role) {
      return res.status(500).send({
        success: false,
        message: "Roles doesnt match",
      });
    }

    //compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1D" }
    );

    return res.status(200).send({
      success: true,
      msg: "Login successfuly",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error in login api",
      erorr: error,
    });
  }
};

//get current user

const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.staus(500).send({
      success: false,
      message: "unable to get current user",
    });
  }
};

export { registerController, loginController, currentUserController };
