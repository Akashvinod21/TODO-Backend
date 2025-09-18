# MyTodoApp

## Description

MyTodoApp is a full-featured To-Do application built with **Node.js**, **Express**, and **MongoDB**.  
It allows users to register and log in securely, manage tasks (add, edit, delete), set priority levels, and track deadlines.  
Sensitive information like JWT secrets and database credentials are stored in environment variables for security.

---

## Features

- Secure user authentication using JWT  
- Add, edit, delete, and view tasks  
- Filter tasks by priority and deadline  
- Tasks stored securely in MongoDB  
- Environment variables managed via `.env`  

---

## Folder Structure

MyTodoApp/
├─ Controller/          # Controllers for handling business logic
├─ models/              # Mongoose schemas for database
├─ routes/              # API routes
├─ node_modules/        # Node dependencies
├─ .env.example         # Sample environment variables
├─ .gitignore           # Files to ignore in Git
├─ README.md            # Project documentation
├─ package.json         # Project metadata and dependencies
└─ server.js            # Entry point of the application


---

## Prerequisites

- Node.js >= 16  
- npm (Node Package Manager)  
- MongoDB (Atlas or local instance)  

---

## Setup / Installation

1. **Clone the repository**

git clone https://github.com/Akashvinod21/TODO-Backend.git
cd MyTodoApp

2. **Install dependencies**
npm install

Set up environment variables
3. **Copy `.env.example` to `.env` and fill your values**

4. **Start the application**
npm start


The server will run at `http://localhost:5000` (or the port set in `.env`).

---

## API Endpoints

| Method | Endpoint      | Description             | Auth Required |
| ------ | ------------- | ----------------------- | ------------ |
| POST   | /register     | Register new user       | No           |
| POST   | /login        | Login and get JWT token | No           |
| POST   | /tasks        | Add new task            | Yes          |
| GET    | /tasks        | Get all tasks           | Yes          |
| PUT    | /tasks/:id    | Update task             | Yes          |
| DELETE | /tasks/:id    | Delete task             | Yes          |

**All task routes require JWT authentication in the header:**  
`Authorization: Bearer <token>`

---

## Usage

1. Register a new account via `/register`.  
2. Log in to get a JWT token.  
3. Use the token in Authorization headers to access task routes.  
4. Tasks are stored in MongoDB, and credentials are managed with `.env`.  

---

## Environment Variables

- `JWT_SECRET` – Secret key for JWT authentication  
- `DATABASE_URL` – MongoDB connection string  
- `PORT` – Server port (default: 5000)  

---

## License

This project is licensed under the MIT License.

---

## Author

**Akash Vinod**  
GitHub: [https://github.com/Akashvinod21](https://github.com/Akashvinod21)