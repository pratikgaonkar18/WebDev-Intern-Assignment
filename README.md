#  AuthApp – Full Stack Authentication System

A production-ready authentication system built using **React, Node.js, Express, MongoDB, JWT**, and deployed live using **Vercel + Render + MongoDB Atlas**.

Designed as a real-world internship project demonstrating full-stack skills.

---

##  Live Demo Links

🔹 **Frontend (Vercel)** → https://web-dev-intern-assignment.vercel.app/  
🔹 **Backend API (Render)** → https://webdev-intern-assignment-p1l1.onrender.com/

---

##  Tech Stack

### 🔹 Frontend
- React (Vite)
- React Router
- Axios
- LocalStorage Token Handling

### 🔹 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt password hashing
- CORS configuration

### 🔹 Deployment
- **Vercel** (Frontend)
- **Render** (Backend)
- **MongoDB Atlas** (Database)

---

##  Features

✔ User Signup  
✔ User Login  
✔ Encrypted passwords (bcrypt hash)  
✔ JWT-based authentication  
✔ Dashboard access only with token  
✔ Redirect if unauthenticated  
✔ Handles login/signup errors  
✔ Hosted & live publicly  

---

##  Folder Structure

WebDev-Intern-Assignment/
│
├── auth-backend
│ ├── server.js
│ ├── config.js
│ ├── routes/auth.js
│ ├── models/User.js
│ ├── middleware/authMiddleware.js
│
├── auth-frontend
│ ├── src
│ │ ├── api.js
│ │ ├── App.jsx
│ │ ├── pages
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ └── Dashboard.jsx
│ │ └── components/Navbar.jsx
│ └── vite.config.js
│
└── README.md


---

##  How Authentication Works

1. User signs up  
2. Password is hashed using bcrypt  
3. Server issues JWT token  
4. Token saved in LocalStorage  
5. Protected pages verify token  
6. Login reissues fresh token  

---

##  API Routes

### ➤ `POST /api/auth/signup`
- Creates new user
- Returns token + user details

### ➤ `POST /api/auth/login`
- Validates user
- Returns token + user details

### ➤ `GET /api/auth/me`
- Returns authenticated user info (requires token)

---

##  Environment Variables

### 🔸 Backend (.env)
 
-> MONGO_URI=your_mongo_connection_string
->JWT_SECRET=your_secret_key
->CLIENT_URL=https://web-dev-intern-assignment.vercel.app


### 🔸 Frontend  
Handled via `api.js` config.

---

## 🧪 Testing Flow

✔ Visit signup → register a user  
✔ Login → redirected to dashboard  
✔ Try invalid password → error shown  
✔ Try visiting dashboard without login → redirected to login  

---

##  Screenshots

- Signup UI
- Login UI
- Dashboard UI
- Browser network tab → token response
- MongoDB user data

---

##  What I learned

This project helped me learn:

✔ Full stack development  
✔ JWT Authentication Flow  
✔ Secure password storage  
✔ React state + route protection  
✔ Axios API handling  
✔ Cloud deployment  
✔ Debugging CORS & production issues  

---

##  Author

**Pratik Gaonkar**

---

