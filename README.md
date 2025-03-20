
# Task Management App

## Description

The **Task Management App** allows users to sign up, log in, manage their tasks, and collaborate with other users. It provides functionality for creating, editing, and deleting tasks, marking them as complete, and organizing them by status (Pending, In Progress, and Completed). The app is built with **FastAPI** on the backend, **React** with **TanStack Query** and **TanStack Router** for the frontend, and uses **TailwindCSS** for styling.

---

## Features

-  **User Authentication**:
	- JWT-based signup and login system.
	- Users can only manage their own tasks.

-  **Task Management**:
	- Create, edit, delete, and view tasks.
	- Tasks can be marked as "Pending", "In Progress", or "Completed".
	- Organize tasks by due date and status.

-  **Routing**:
	- Public Routes: `/login`, `/signup`
	- Protected Routes: `/dashboard`, `/tasks/:id/edit`

-  **Styling**:
	- TailwindCSS for modern, responsive UI.
	- Clean and intuitive design.

-  **Error Handling**:
	- User-friendly error messages for failed login or signup attempts.

---

## Tech Stack

-  **Frontend**:
	- React
	- TanStack Query (for API state management)
	- TanStack Router (for client-side routing)
	- TailwindCSS (for styling)

-  **Backend**:
	- FastAPI
	- SQLAlchemy (for ORM)
	- PostgreSQL (as the database)

---

## Installation

### Prerequisites
Ensure you have the following installed:
-  **Docker**: [Download Docker](https://www.docker.com/products/docker-desktop)
-  **Docker Compose**: Usually comes with Docker Desktop.
-  **Node.js**: [Download Node.js](https://nodejs.org/)
-  **Python 3.9+**: [Download Python](https://www.python.org/)

---

### Running the App

1.  **Clone the repository**:
```bash
git clone https://github.com/rkajaria-1507/task-management-app.git
cd task-management-app
```
2.  **Set up the backend**:
- Navigate to the `backend` directory:
```bash
cd backend
```
- Install Python dependencies:
```bash
pip install -r requirements.txt
```
- Ensure that the **PostgreSQL** database is running via Docker (this will be handled automatically by Docker Compose).

3.  **Set up the frontend**:
- Navigate to the `frontend` directory:
```bash
cd frontend
```
- Install frontend dependencies:
```bash
npm install
```

4.  **Run the app with Docker Compose**
- Go back to the root directory of the project and start the containers:
```bash
docker-compose up --build
```

- The frontend will be available at: `http://localhost:3000`
- The backend will be available at: `http://localhost:8000`

---

## Usage

### 1. **Sign up**:
- Navigate to `/signup` and fill out the form to create an account.

### 2. **Login**:
- After signing up, log in using your credentials at `/login`.

### 3. **Dashboard**:
- Once logged in, you'll be redirected to the dashboard, where you can view, create, edit, and delete tasks.
- Tasks will be displayed by status: Pending, In Progress, or Completed.

### 4. **Task Editing**:

- You can edit tasks by clicking on the respective task and modifying the details.

### 5. **Logout**:
- The app will automatically handle session expiration. You can also manually log out, which will redirect you to the login page.

---

## API Documentation
The backend provides the following API endpoints:
### Authentication
-  `POST /api/signup`: Register a new user
-  `POST /api/login`: Authenticate a user and get JWT token

### Tasks
-  `GET /api/tasks`: Get all tasks for the authenticated user
-  `POST /api/tasks`: Create a new task
-  `GET /api/tasks/{task_id}`: Get a specific task
-  `PUT /api/tasks/{task_id}`: Update a specific task
-  `DELETE /api/tasks/{task_id}`: Delete a specific task

---

## Environment Variables
### Backend (.env file in backend directory)
```bash
DB_HOST=db
DB_PORT=5432
DB_NAME=taskdb
DB_USER=postgres
DB_PASSWORD=Kajaria
JWT_SECRET_KEY=your_secret_key
JWT_ALGORITHM=HS256
JWT_EXPIRE_MINUTES=60
```

### Frontend (.env file in frontend directory)
`VITE_BACKEND_URL=http://localhost:8000`

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Contact

Raghav Kajaria - raghavkajaria67@gmail.com

Project Link: [https://github.com/rkajaria-1507/task-management-app](https://github.com/rkajaria-1507/task-management-app)