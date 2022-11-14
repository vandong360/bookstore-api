import { Booklens } from "../models/booklens.model.js";

// @route /booklens
// @controller create new cart
export const newBooklens = async (req, res) => {
  try {
    const newBooklens = new Booklens(req.body);
    const booklens = await newBooklens.save();

    res.json({
      success: true,
      message: "Successfully!",
      booklens,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// @route /booklens
// @controller get user cart
export const getBooklens = async (req, res) => {
  try {
    const booklens = await Booklens.find();
    res.json({ success: true, message: "Good!", booklens });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
