# 📝 Todo List App

A server-rendered Todo application built using **Node.js, Express, EJS, Mongoose, and Bootstrap**.
It allows users to add, view, and delete tasks with persistent storage using MongoDB.

---

## 🚀 Features

* Add new tasks with time and description
* View tasks in a card-based layout
* Delete tasks
* Data stored in MongoDB
* Uses environment variables for configuration

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Templating:** EJS
* **Database:** MongoDB + Mongoose
* **Frontend:** Bootstrap

---

## 📁 Project Structure

```
todolistexpress/
│── Models/
│── Routes/
│── views/
│── config/
│── .env
│── index.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/sayan-ay/todolist.git
cd todolistexpress
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```
DB_URI=your_mongodb_connection_string
PORT=2500
```

---

### 4. Run the app

```
npm start
```

Open in browser:

```
http://localhost:2500
```

---

## 🧠 Key Concepts Used

* Server-side rendering with EJS
* MongoDB CRUD operations (Create, Read, Delete)
* Express routing
* Environment variables using dotenv

---

## 📌 Future Improvements

* Edit/update functionality
* Better UI interactions
* Validation and error handling

---

## 📄 License

This project is for learning purposes.
