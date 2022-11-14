import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BooklensSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  itemID: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Booklens = mongoose.model("booklens", BooklensSchema);

