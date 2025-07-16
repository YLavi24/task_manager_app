# Task Manager Application

A full-stack task management web application built with React, Node.js, Express, and MongoDB.

## Features

### Core Features

- **User Authentication**: Sign up, Login, Logout with JWT
- **Private Task Lists**: Each user has their own secure task list
- **Task Management**: Create, edit, delete, and update tasks
- **Task Properties**: Title, description, due date, status (To Do, In Progress, Done)
- **Task Filtering**: Filter tasks by status
- **Responsive Design**: Mobile-friendly UI

### Technical Features

- JWT-based authentication
- RESTful API endpoints
- MongoDB database with Mongoose ODM
- React with Context API for state management
- Responsive CSS design
- Input validation and error handling

## Tech Stack

### Frontend

- React 19
- React Router DOM
- Axios for API calls
- CSS3 with responsive design

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- express-validator for input validation

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas connection)
- npm or yarn package manager

## Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd task-manager-app
```

### 2. Install dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `server` directory with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_key_here_change_in_production
NODE_ENV=development
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas connection string in MONGODB_URI
```

### 5. Run the application

#### Option 1: Run both frontend and backend simultaneously

```bash
# From the root directory
npm run dev
```

#### Option 2: Run frontend and backend separately

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info

### Tasks

- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Usage

1. **Sign Up**: Create a new account with username, email, and password
2. **Login**: Sign in with your email and password
3. **Dashboard**: View your task list and manage tasks
4. **Create Task**: Click "Add New Task" to create a task with title, description, due date, and status
5. **Edit Task**: Click the edit button (✏️) on any task to modify it
6. **Update Status**: Use the status dropdown to change task status
7. **Delete Task**: Click the delete button (🗑️) to remove a task
8. **Filter Tasks**: Use the filter dropdown to view tasks by status
9. **Logout**: Click logout to end your session

## Project Structure

```
task-manager-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/       # Login/Register components
│   │   │   ├── Dashboard/  # Main dashboard
│   │   │   └── Tasks/      # Task-related components
│   │   ├── contexts/       # React Context (Auth)
│   │   └── App.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── middleware/         # Auth middleware
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── index.js           # Server entry point
│   └── package.json
└── package.json           # Root package.json
```

## Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Protected API routes
- Input validation and sanitization
- CORS configuration
- User data isolation

## Development

### Adding New Features

1. Backend: Add routes in `server/routes/`
2. Frontend: Add components in `client/src/components/`
3. Update API calls in frontend components
4. Test functionality

### Database Schema

#### User Model

```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  updatedAt: Date
}
```

#### Task Model

```javascript
{
  title: String (required),
  description: String,
  dueDate: Date,
  status: String (enum: 'To Do', 'In Progress', 'Done'),
  userId: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
