📝 Todo Board Application (MERN Stack)

A full-stack Todo Board Management Application built using the MERN stack (MongoDB, Express, React, Node.js).
It supports authentication, board management, and todo tracking with a clean and scalable architecture.

🚀 Features
🔐 Authentication

User Registration & Login

JWT-based Authentication

Protected Routes

Secure Password Hashing using bcrypt

📋 Boards

Create Boards

View User-specific Boards

Edit Board Title

Delete Boards

✅ Todos

Create Todos under Boards

View Todos by Board

Toggle Todo Completion

Delete Todos

🎨 UI

Clean & responsive UI

Reusable Navbar and Layout

Route protection on frontend

Component-wise CSS files

🧰 Tech Stack
Frontend

React.js (Vite)

React Router DOM

Axios

Plain CSS (component-based styling)

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT (jsonwebtoken)

bcryptjs

CORS

📁 Project Structure
Backend

backend/
├── controllers/
│   ├── authController.js
│   ├── boardController.js
│   └── todoController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── UserModel.js
│   ├── BoardModel.js
│   └── TodoModel.js
│
├── routes/
│   ├── authRoutes.js
│   ├── boardRoutes.js
│   └── todoRoutes.js
│
├── server.js
├── package.json
└── .env


Frontend

frontend/
├── src/
│   ├── api/
│   │   └── axios.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── Board.jsx
│   │
│   ├── styles/
│   │   ├── navbar.css
│   │   ├── dashboard.css
│   │   ├── board.css
│   │   └── auth.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── index.html


🔑 Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ Getting Started
1️⃣ Clone the repository

git clone https://github.com/your-username/todo-board-app.git
cd todo-board-app


2️⃣ Backend Setup

cd backend
npm install
npm run dev


Server will run on:
http://localhost:5000


3️⃣ Frontend Setup

cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173


🔐 API Overview

Auth Routes
POST   /api/auth/register
POST   /api/auth/login

Board Routes
GET    /api/boards
POST   /api/boards
PUT    /api/boards/:id
DELETE /api/boards/:id

Todo Routes
GET    /api/todos/:boardId
POST   /api/todos/:boardId
PUT    /api/todos/:id
DELETE /api/todos/:id

🔒 All board and todo routes are JWT protected

🛡️ Security Practices

Password hashing using bcrypt

JWT verification middleware

Protected frontend routes

User-specific data access

📈 Future Improvements

Drag & Drop Todos

Due dates & priority

Refresh Token Authentication

Role-based access (Admin/User)

Deployment on AWS / Render

Unit & Integration Tests


👨‍💻 Author

Rahul Kumar
🎓 B.Tech CSE | Full-Stack Developer
💡 MERN | Cloud | DevOps Learner
