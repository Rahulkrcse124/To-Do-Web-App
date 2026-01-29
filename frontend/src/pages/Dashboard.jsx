import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [boards, setBoards] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const fetchBoards = async () => {
    const res = await API.get("/boards");
    setBoards(res.data.boards);
  };

  const createBoard = async () => {
    await API.post("/boards", { title });
    setTitle("");
    fetchBoards();
  };

  const deleteBoard = async (id) => {
    await API.delete(`/boards/${id}`);
    fetchBoards();
  };

  const editBoard = async (id, oldTitle) => {
    const newTitle = prompt("Edit board title", oldTitle);
    if (!newTitle) return;

    await API.put(`/boards/${id}`, { title: newTitle });
    fetchBoards();
  };

  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div className="container">
      <Navbar />

      <h2>Your Boards</h2>

      <input
        placeholder="New Board"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createBoard}>Add Board</button>

      <ul className="board-list">
        {boards.map((b) => (
          <li key={b._id} className="board-item">
            <span onClick={() => navigate(`/board/${b._id}`)}>{b.title}</span>

            <div className="board-actions">
              <button onClick={() => editBoard(b._id, b.title)}>✏️</button>
              <button onClick={() => deleteBoard(b._id)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
