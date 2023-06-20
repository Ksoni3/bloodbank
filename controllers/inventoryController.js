import inventoryModel from "../models/inventoryModel.js";
import userModel from "../models/userModel.js";

// Create inventory
const createInventoryController = async (req, res) => {
  const { email, inventoryType } = req.body;

  try {
    // validation
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "No user found",
      });
    }

    if (inventoryType === "in" && user.role !== "donor") {
      return res.status(404).send({
        success: false,
        message: "Not a donor",
      });
    }

    if (inventoryType === "out" && user.role !== "hospital") {
      return res.status(404).send({
        success: false,
        message: "Not a hospital",
      });
    }

    // save record or inventory

    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "new blood record added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in creating inventory",
      error,
    });
  }
};

// Get All blood recoreds

const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel.find({
      organisation: req.body.organisation,
    }).populate('donor').sort({createdAt: -1 });
    console.log(inventory)

    return res.status(200).send({
        success: true,
        message: "get all records successfully",
        inventory,

    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in gettin invnetory",
    });
  }
};

export { createInventoryController, getInventoryController };
