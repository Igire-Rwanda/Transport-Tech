import express from "express";
import userModel from "../models/usermodel.js";

//create route
const assignRole = async (req, res) => {
  try {
    let userId = req.query.id;
    let role = req.body;
    let user = await userModel.findById(userId);

    if (!user) {
      return res.sendStatus(404);
    }

    let updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: role },
      { new: true } // To get the updated user in the response
    );

    res.status(200).json({
      message: "Role added successfully",
      data: updatedUser,
      error: null,
    });
  } catch (error) {
    console.log("Error occurred: ", error);
    res.status(500).json({
      message: "Failed to load data. Error occurred.",
      error: error,
      data: null,
    });
  }
};
//get all roles
const getAllRoles = async (req, res) => {
  try {
    let data = req.body;
    let role = data.role;
    //pass the role in the body 
    let response = await userModel.find({ role: role });
    if (response.length == 0) {
      res.status(404).json({
        message: "No data found",
        data: response,
        error: "No data found",
      });
    } else {
      res.status(200).json({
        message: "Retrieved successfully",
        data: response,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occurred: ", error);
    res.status(500).json({
      message: "Failed to load data. Error occurred.",
      error: error,
      data: null,
    });
  }
};

export { assignRole, getAllRoles };
