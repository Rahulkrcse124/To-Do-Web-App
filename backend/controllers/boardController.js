import boardModel from "../models/BoardModel.js";

// create board
export const createBoard = async (req, res) => {
  const board = await boardModel.create({
    title: req.body.title,
    user: req.user,
  });
  return res.status(201).json({
    message: "create board successfully",
    success: true,
    board,
  });
};

// get boards
export const getBoards = async (req, res) => {
  const boards = await boardModel.find({ user: req.user });
  return res.status(200).json({
    message: "get boads successfully",
    success: true,
    boards,
  });
};


// delete board
export const deleteBoard = async (req, res) => {
  try {
    await boardModel.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });

    return res.status(200).json({
      message: "board deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error deleting board",
      success: false,
    });
  }
};


// update board
export const updateBoard = async (req, res) => {
  try {
    const board = await boardModel.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      { title: req.body.title },
      { new: true }
    );

    if (!board) {
      return res.status(404).json({
        message: "Board not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Board updated successfully",
      success: true,
      board,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error updating board",
      success: false,
    });
  }
};
