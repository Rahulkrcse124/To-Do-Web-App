import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createBoard,
  getBoards,
  deleteBoard,
  updateBoard,
} from "../controllers/boardController.js";

const router = express.Router();
router.post("/", protect, createBoard);
router.get("/", protect, getBoards);
router.delete("/:id", protect, deleteBoard);
router.put("/:id", protect, updateBoard);

export default router;
