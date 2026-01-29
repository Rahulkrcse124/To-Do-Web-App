# 📝 To-Do Web App (MERN Stack)

A full-stack **Task Management (To-Do) Web Application** built using the **MERN stack**, featuring user authentication, boards, to-dos, and secure password reset functionality.

This project demonstrates clean architecture, secure authentication, REST APIs, and modern React practices.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login)
- 🔑 JWT-based Authorization
- 📧 Forgot Password & Reset Password (Email based)
- 📋 Create & Manage Boards
- ✅ Create, Update, Delete To-Dos inside Boards
- 🛡️ Protected Routes
- 📦 Modular Backend Architecture
- 🎨 Clean & Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS (Modular styles)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js
- Nodemailer

---

## 📁 Project Structure

### Backend
```text
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
├── config/
│   └── db.js
│
├── server.js
├── package.json
└── .env


### Backend
```text
frontend/
├── public/
│   └── index.html
│
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
│   │   ├── ForgotPassword.jsx
│   │   ├── ResetPassword.jsx
│   │   ├── Dashboard.jsx
│   │   └── Board.jsx
│   │
│   ├── styles/
│   │   ├── auth.css
│   │   ├── navbar.css
│   │   ├── dashboard.css
│   │   └── board.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── package-lock.json


⚙️ Environment Variables

Create a .env file inside the backend folder:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todoapp
JWT_SECRET=your_jwt_secret

EMAIL=yourgmail@gmail.com
EMAIL_PASSWORD=your_gmail_app_password

⚠️ Use Gmail App Password, not your actual Gmail password.

🧪 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/To-Do-Web-App.git
cd To-Do-Web-App

2️⃣ Backend Setup
cd backend
npm install
npm run dev

Server will start at:
http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend will run at:
http://localhost:5173

🔐 Authentication Flow

Passwords are securely hashed using bcrypt

JWT is used for session management

Protected routes restrict unauthorized access

Forgot password uses:

Secure token generation

Email verification

Token expiry handling

📌 API Endpoints
Auth Routes
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/forgot-password
PUT    /api/auth/reset-password/:token

Board Routes
POST   /api/boards
GET    /api/boards
PUT    /api/boards/:id
DELETE /api/boards/:id


Todo Routes
POST   /api/todos
PUT    /api/todos/:id
DELETE /api/todos/:id


🧠 Security Highlights

Password hashing using bcrypt

JWT token authentication

Reset tokens are hashed before storing

Time-based token expiration

Protected API routes using middleware

📸 Screenshots
<img width="1200" height="669" alt="Screenshot 2026-01-29 212850" src="https://github.com/user-attachments/assets/0f95b889-3e6f-496b-bcfd-15578be0fd53" />

<img width="542" height="506" alt="Screenshot 2026-01-29 213015" src="https://github.com/user-attachments/assets/e9f836ff-ed29-4e0e-aafd-4ae373447f46" />

<img width="559" height="493" alt="Screenshot 2026-01-29 213103" src="https://github.com/user-attachments/assets/50f31be9-f8f4-49fc-8842-0bde7b0e2191" />

<img width="568" height="384" alt="Screenshot 2026-01-29 213224" src="https://github.com/user-attachments/assets/99e77ffc-ea37-4cd6-abe5-a2ed1879bf2d" />

<img width="524" height="406" alt="Screenshot 2026-01-29 213249" src="https://github.com/user-attachments/assets/25ff1566-e896-4eb7-9f17-71080a2a5bdc" />

🙌 Author

Rahul Kumar
Full Stack Developer (MERN)
📍 Jodhpur, Rajasthan

⭐ Acknowledgements

MongoDB

Express.js

React.js

Node.js

Open-source community



📄 License

This project is licensed under the MIT License.
