# ⚡ React Admin Panel Frontend

A **React-based frontend dashboard** for managing **Admins, Employees, and Roles**.  
This frontend communicates with the **FastAPI backend** using JWT-based authentication.

---

## 📌 Features

✅ **JWT Authentication (Login & Logout)**  
✅ **Role Management (Add, Edit, Delete)**  
✅ **Employee Management (Add, Edit, Search)**  
✅ **Responsive Admin Dashboard**  
✅ **Protected Routes (Only logged-in admins can access)**  
✅ **SweetAlert2 Notifications**  
✅ **Reusable API Service Layer**  
✅ **Modern UI with Tailwind CSS & HeadlessUI**

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18+](https://react.dev/)  
- **Routing**: React Router  
- **State Management**: Context API (`AuthContext`)  
- **Styling**: Tailwind CSS + Headless UI  
- **Icons**: HeroIcons  
- **Notifications**: SweetAlert2  
- **API Calls**: Axios

---

## 📂 Project Structure

```bash
react-admin-panel/
│
├── src/
│ ├── api/ # API service functions
│ │ ├── employees.js
│ │ ├── roles.js
│ │ └── auth.js
│ ├── components/ # Reusable UI components
│ ├── context/
│ │ └── AuthContext.js # JWT token & Auth state
│ ├── pages/
│ │ ├── Login.js
│ │ ├── Employees.js
│ │ └── Roles.js
│ ├── App.js
│ └── main.js
│
├── .env # API base URL (ignored in git)
├── .gitignore
├── package.json
└── README.md

```

---

## ⚙️ Installation & Setup

### 1️⃣ **Clone the repository**
```bash
git clone https://github.com/your-username/react-admin-panel.git
cd react-admin-panel
```

### 2️⃣ Install dependencies

```bash
npm install
```
### 3️⃣ Configure Environment Variables

Create a .env file in the root:

```bash

VITE_API_BASE_URL=http://127.0.0.1:8000  # FastAPI backend URL
```

### 4️⃣ Run the React development server
```bash
npm run dev
```
The app will run at: http://localhost:5173

## 🔗 Backend Setup
Make sure the FastAPI backend is running before you use the frontend:
Backend Repository
Start with:

```bash
uvicorn app.main:app --reload
```
## 🔑 Authentication Flow
Login via /admins/login → JWT is stored in localStorage.

AuthContext manages the token & protects routes.

All API calls include the token in headers:

```bash
Authorization: Bearer <token>
```

## 📸 Screenshots
🔐 Login Page
(Insert screenshot)

## 👥 Employee Management
(Insert screenshot)

## 🛠️ Role Management
(Insert screenshot)

## 📝 Default Credentials (First Run)
The first Super Admin must be created manually via the backend /admins/register route.

