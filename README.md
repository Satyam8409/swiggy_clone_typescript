# Swiggy Clone – React + TypeScript

A Swiggy-inspired food ordering web application built using **React, TypeScript, Tailwind CSS, Redux Toolkit, and Async Thunk**. The project uses a live Swiggy API to fetch restaurant and food-related data and provides a responsive user interface for browsing restaurants and managing food items.

## 🚀 Features

- 🍔 Browse restaurants and food items using a live Swiggy API
- 🔍 Restaurant/food browsing experience
- 🛒 Cart functionality
- 🔐 Dummy authentication/login flow
- 📱 Responsive UI
- ⚛️ React with TypeScript
- 🎨 Tailwind CSS for styling
- 🗃️ Redux Toolkit for global state management
- 🔄 Async Thunk for asynchronous API calls
- 🧩 Reusable React components
- ⚡ Vite development setup

## 🔑 Demo Login Credentials

The authentication in this project uses dummy credentials for demonstration purposes.

| Field | Value |
|---|---|
| Username | `emilys` |
| Password | `emilyspass` |

> **Note:** These are dummy credentials and are not connected to a real authentication backend.

## 🛠️ Tech Stack

- **Frontend:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Async Operations:** Redux Toolkit Async Thunk
- **API:** Live Swiggy API
- **Build Tool:** Vite
- **Package Manager:** npm

## 📁 Project Structure

```text
swiggy_clone_typescript/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   ├── utils/
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

> The exact component/file names may vary as the project continues to evolve.

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Move into the project directory

```bash
cd swiggy_clone_typescript
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available on the local development URL shown by Vite.

## 🔄 API Integration

This project integrates a **live Swiggy API** to retrieve restaurant and food-related information.

The application handles API requests through Redux Toolkit and Async Thunk, allowing API data to be stored and managed through the application's global state.

## 🔐 Authentication

The login functionality is implemented as a **dummy authentication flow** for demonstration purposes.

Use the following credentials:

```text
Username: emilys
Password: emilyspass
```

No real user account or sensitive authentication data is involved.

## 🛒 Application Flow

1. Open the application.
2. Log in using the demo credentials.
3. Browse restaurants and food items.
4. View restaurant/food details.
5. Add items to the cart.
6. Manage cart items and view the total.

## 📦 Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## 🎯 Purpose

This project was developed to practice and demonstrate:

- React and TypeScript development
- API integration
- Redux Toolkit state management
- Async Thunk
- Component-based architecture
- Tailwind CSS
- Authentication flow
- Real-world frontend application development

## 👨‍💻 Author

**Satyam Kumar Singh**

Frontend Developer | MERN Stack Developer
