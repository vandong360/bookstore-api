import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RecommendSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  itemID: {
    type: String,
    required: true,
  },
  prediction: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Recommend = mongoose.model("recommend", RecommendSchema);

