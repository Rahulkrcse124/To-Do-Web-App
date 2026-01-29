import TodoModel from "../models/TodoModel.js";

export const createTodo = async (req, res) => {
  try {
    const todo = await TodoModel.create({
      title: req.body.title,
      board: req.params.boardId,
    });
    return res.status(201).json({
      message: "create todo successfully",
      success: true,
      todo,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "error while creating todo",
      success: false,
    });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find({ board: req.params.boardId });
    return res.status(200).json({
      message: "get todos successfully",
      success: true,
      todos,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "error while getting todos",
      success: false,
    });
  }
};



// delete todo
export const deleteTodo = async (req, res) => {
  try {
    await TodoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "todo deleted" });
  } catch {
    res.status(500).json({ success: false });
  }
};

// toggle completed
export const toggleTodo = async (req, res) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    todo.completed = !todo.completed;
    await todo.save();

    res.status(200).json({
      success: true,
      todo,
    });
  } catch {
    res.status(500).json({ success: false });
  }
};
