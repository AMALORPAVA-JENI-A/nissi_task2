# nissi_task2
# 🌟 React UI with Parcel & LocalStorage

This project is a simple yet functional multi-page user interface built using **React**, styled with **external CSS**, and powered by **Parcel** as the bundler. It uses your browser's **localStorage** to save data — no backend or database needed!

---

## 🔧 What This Project Includes

- 🔐 **Login Page** – Basic authentication (username & password check)
- 🏠 **Home Page** – Navigate to view or manage data
- 📄 **Display Page** – View a list of entries with image, title, and description
- ✍️ **Input Page** – Add new entries and delete existing ones
- 💾 **LocalStorage** – Data persists even after refresh
- 🎨 **Clean UI** – Built using traditional external CSS
- 🚀 **Parcel Bundler** – Easy to run with `npm start`

---

## 📁 Folder Structure

```
nissi_task2/
├── src/
│   ├── components/
│   │   ├── AuthPage.js
│   │   ├── HomePage.js
│   │   ├── DisplayDataPage.js
│   │   └── InputDataPage.js
│   ├── App.js
│   ├── index.js
│   ├── index.html
│   └── index.css
├── package.json
└── README.md
```
---

## 🚀 Getting Started

### 1️⃣ Prerequisites

- Node.js (v14 or later)
- npm

### 2️⃣ Install Dependencies

Open terminal in the project directory and run:

```bash
npm install
```

### 3️⃣ Run the App Locally

```bash
npm run start
```

Then open your browser and go to:

👉 [http://localhost:1234](http://localhost:1234)

---

## 🔑 Default Login

| Username | Password |
|----------|----------|
| `admin`  | `1234`   |

---

## 📸 Optional: Screenshots Folder

You can add a `screenshots/` folder to your project and upload images of your UI for visual reference.

---

## 🛠 How LocalStorage Works

- Data is stored under the key `items` in your browser's localStorage.
- Add new entries using the Input page — each entry includes a title, image URL, and description.
- View saved entries on the Display page.
- Data persists across page reloads!

---

## 📦 Build for Production

```bash
npm run build
```

This will generate a `dist/` folder with your final, production-ready files.

---

## 👩‍💻 Created By

Amalorpava jeni A 
React Developer | UI/UX Enthusiast

---
