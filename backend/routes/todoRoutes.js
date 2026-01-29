import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createTodo,
  getTodos,
  toggleTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();
router.post("/:boardId", protect, createTodo);
router.get("/:boardId", protect, getTodos);
router.delete("/delete/:id", protect, deleteTodo);
router.put("/toggle/:id", protect, toggleTodo);

export default router;
