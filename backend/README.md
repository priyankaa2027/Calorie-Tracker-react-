# Student Progress Tracker Backend

This is the backend part of the Student Progress Tracker application built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Student Management**: Add and retrieve student information including name, subject, score, and progress level.
- **RESTful API**: Provides endpoints for managing student data.
- **MongoDB Integration**: Utilizes MongoDB for data storage and Mongoose for object modeling.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd student-progress-tracker/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Configuration

1. Set up your MongoDB database and update the connection string in `src/config/db.js`.

### Running the Application

To start the server, run:
```
npm start
```

The server will run on `http://localhost:5000` by default.

### API Endpoints

- `GET /api/students`: Retrieve all students.
- `POST /api/students`: Add a new student.

## Folder Structure

- `src/`: Contains all source code.
  - `controllers/`: Contains controller functions for handling requests.
  - `models/`: Contains Mongoose models.
  - `routes/`: Contains route definitions.
  - `config/`: Contains configuration files, including database connection.
  - `app.js`: Entry point for the application.

## License

This project is licensed under the MIT License.