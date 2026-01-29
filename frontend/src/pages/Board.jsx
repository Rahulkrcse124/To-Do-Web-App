import { useEffect, useState } from "react";
import API from "../api/axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/board.css";

export default function Board() {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    const res = await API.get(`/todos/${id}`);
    setTodos(res.data.todos); // ✅ FIX
  };

  const createTodo = async () => {
    if (!title.trim()) return;
    await API.post(`/todos/${id}`, { title });
    setTitle("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await API.delete(`/todos/delete/${id}`);
    fetchTodos();
  };

  const toggleTodo = async (id) => {
    await API.put(`/todos/toggle/${id}`);
    fetchTodos();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <Navbar />

      <h2>Todos</h2>

      <input
        placeholder="New Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={createTodo}>Add Todo</button>

      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t._id}>
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleTodo(t._id)}
            >
              {t.title}
            </span>

            <button onClick={() => deleteTodo(t._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
