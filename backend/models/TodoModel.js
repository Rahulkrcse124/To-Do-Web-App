import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
  board: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
});

export default mongoose.model("Todo", todoSchema);
