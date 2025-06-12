# Student Progress Tracker

A full-stack web application for tracking student progress across different subjects. Built with React, Node.js, Express, and MongoDB.

## Overview

The Student Progress Tracker is a comprehensive web application designed to help educators and administrators track student performance across various subjects. With an intuitive interface and robust backend, it provides real-time updates and detailed progress monitoring.

## Features

- Create, read, update, and delete student records
- Track student progress by subject
- Score tracking (0-100)
- Progress level categorization (Beginner, Intermediate, Advanced)
- Responsive design for all devices
- Real-time form validation
- Interactive notifications

## Tech Stack

### Frontend
- React 18
- React Router v6
- React Toastify for notifications
- Axios for API calls
- Modern CSS with Grid and Flexbox

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Express Validator for input validation
- CORS enabled
- Error handling middleware

## Project Structure

```
student-progress-tracker/
├── frontend/                # React frontend
│   ├── public/             # Static files
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/         # Page components
│       └── styles/        # CSS styles
└── backend/               # Node.js backend
    └── src/
        ├── config/        # Database configuration
        ├── controllers/   # Request handlers
        ├── middleware/    # Custom middleware
        ├── models/        # Database models
        └── routes/        # API routes
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd student-progress-tracker
```

2. Install Backend Dependencies:
```bash
cd backend
npm install
```

3. Configure Environment Variables:
Create a `.env` file in the backend directory:
```env
MONGO_URI=mongodb://localhost:27017/student-progress-tracker
PORT=5000
```

4. Install Frontend Dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the Backend Server:
```bash
cd backend
npm run dev
```
The server will start on http://localhost:5000

2. Start the Frontend Development Server:
```bash
cd frontend
npm start
```
The application will open in your browser at http://localhost:3000

## Project Structure

```
student-progress-tracker
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── app.js
│   │   └── config
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd student-progress-tracker
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### API Endpoints

- `GET /api/students`: Retrieve all students.
- `POST /api/students`: Add a new student.

## Implementation Details

### Backend Implementation
The backend is built with Node.js and Express, following the MVC pattern:
- **Models**: Mongoose schema for student data with validation
- **Controllers**: Separate logic for handling CRUD operations
- **Routes**: RESTful API endpoints with proper error handling
- **Middleware**: Custom error handling and input validation

### Frontend Implementation
The React frontend is organized into reusable components:
- **Components**: 
  - `StudentForm.jsx`: Handles student data input and updates
  - `StudentList.jsx`: Displays student data in a grid layout
- **Pages**:
  - `Dashboard.jsx`: Main container managing state and API calls
- **Styles**:
  - Modern CSS with Grid and Flexbox
  - Responsive design for all device sizes

### Database Schema
```javascript
Student {
  name: String,          // Student's full name
  subject: String,       // Subject name
  score: Number,         // Score (0-100)
  progressLevel: String  // Beginner/Intermediate/Advanced
}
```

### Key Features Implementation
1. **Real-time Form Validation**
   - Frontend validation using controlled components
   - Backend validation using express-validator
   - Immediate user feedback through toast notifications

2. **State Management**
   - React hooks for local state management
   - Axios for API communication
   - Proper error handling and loading states

3. **Responsive UI**
   - CSS Grid for layout management
   - Flexbox for component alignment
   - Mobile-first design approach

4. **Error Handling**
   - Custom error middleware for consistent error responses
   - Toast notifications for user feedback
   - Form validation on both client and server

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.