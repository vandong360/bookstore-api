import { Recommend } from "../models/recommend.model.js";
import { Product } from "../models/product.model.js";

// @route /recommend
// @controller create new cart
export const newRecommend = async (req, res) => {
  try {
    const newRecommend = new Recommend(req.body);
    const recommend = await newRecommend.save();

    res.json({
      success: true,
      message: "Successfully!",
      recommend,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// @route /recommend
// @controller get user cart
export const getRecommend = async (req, res) => {
  try {
    const userId = req.params.id
    let rs = await Recommend.find({ userID: userId }).sort({ prediction: -1 }).limit(30);

    let arrRandom = []
    for (let i = 0; i < 10; i++) {
      const randomItem = rs[Math.floor(Math.random() * rs.length)];
      arrRandom.push(randomItem)

      var index = rs.indexOf(randomItem);
      if (index !== -1) {
        rs.splice(index, 1);
      }
    }

    let products = [];
    for (let i = 0; i < arrRandom.length; i++) {
      const product = await Product.findById(arrRandom[i].itemID).exec();
      products.push(product);
    }
    res.json({ success: true, message: "Good!", products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
