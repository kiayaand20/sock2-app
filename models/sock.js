import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SockSquared = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    imgURL: { type: String, required: true },
    sock1: { type: String, required: true },
    sock2: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("SockSquared", SockSquared);
