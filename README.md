# 🧩 CMS Project

A modern **Content Management System (CMS)** built with **React**, **Redux Toolkit**, and **Tailwind CSS**.  
This project simulates an admin panel where you can **view, edit, and delete data** from a JSON-based API.  
It focuses on clean UI, smooth user experience, and solid state management.

---

## 🌟 Overview

This CMS project demonstrates how to build a dynamic, scalable dashboard for managing various types of content.  
It supports **Dark/Light mode**, multiple pages, and a modular architecture that makes it easy to expand and maintain.

> The goal of this project is to showcase front-end development best practices with React and Redux Toolkit, including state handling, async actions, and component-driven architecture.

---

## 🧠 Key Features

- 🌓 **Dark / Light Mode** toggle
- 👤 **Users Page** – manage user information
- 🛒 **Products Page** – handle products data
- 📰 **Articles Page** – display and manage articles
- 🧾 **Information Page** – overview of key details
- ⚙️ **State Management** with Redux Toolkit (`createSlice`, `createAsyncThunk`)
- 🔁 **JSON-based API** (mock data simulation)

---

## 🧰 Tech Stack

| Category               | Technology              |
| ---------------------- | ----------------------- |
| **Frontend Framework** | React                   |
| **State Management**   | Redux Toolkit           |
| **Styling**            | Tailwind CSS            |
| **Data Source**        | JSON (local / mock API) |

---

## 🧭 Project Structure

```
Cms-Project/
│
├── public/
│   └── ...
│
├── src/
|   ├── assets/
│   ├── Components/
│   ├── Layout/
│   ├── Pages/
│   │   ├── ArticlesPage.jsx
│   │   ├── InfosPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ProductsPage.jsx
│   │   └── UsersPage.jsx
│   ├── Redux/
│   │   ├── Slices/
│   │   └── Store.js
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Alireza-404/Cms-Project.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project locally

```bash
npm run dev
```

Now open your browser at **http://localhost:5173** (or the port shown in the console).

---

## 🧩 How It Works

- The project uses **Redux Toolkit** to manage global states (users, products, etc.) efficiently.
- **createAsyncThunk** handles asynchronous data fetching from a local JSON “API”.
- Components are reusable and designed with **Tailwind** utility classes for consistent styling.
- Includes a global **Theme Context** for toggling dark/light mode.
- Some operations (like Edit and Delete) are shared across multiple pages. To avoid redundancy, these operations are only implemented in certain pages (e.g., Products page) and not repeated in others (e.g., Articles page).

---

## 💬 About Me

👋 Hi, I'm **Alireza**, a passionate Front-End Developer who loves turning complex ideas into clean, functional interfaces.  
I'm focused on **modern web technologies** like React, Redux, and TypeScript — and always exploring new ways to create better user experiences.

If you liked this project, feel free to ⭐ star the repo or connect with me! 🙌

---

## 📫 Contact

- GitHub: [Alireza-404](https://github.com/Alireza-404)
- Email: [alireza4o4shabani@gmail.com]
