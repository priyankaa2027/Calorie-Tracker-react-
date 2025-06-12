# Meal Calorie Tracker

A full-stack web application for tracking daily meals and calorie intake. Built with React, Node.js, Express, and MongoDB.

## Overview

The Meal Calorie Tracker is a comprehensive web application designed to help users monitor their daily food intake and manage their calorie consumption. With an intuitive interface and robust backend, it provides real-time updates and detailed meal tracking.

## Features

- Create, read, update, and delete meal records
- Track daily calorie intake
- Meal categorization (Breakfast, Lunch, Dinner, Snacks)
- Responsive design for all devices
- Real-time form validation
- Interactive notifications

## Tech Stack

### Frontend
- React 18
- React Router
- React Toastify for notifications
- Axios for API calls
- Modern CSS with Grid and Flexbox

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Express Validator for input validation
- CORS enabled
- Error handling   middleware

## Project Structure

```
meal-calorie-tracker/
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
cd meal-calorie-tracker
```

2. Install Backend Dependencies:
```bash
cd backend
npm install
```

3. Configure Environment Variables:
Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/meal-calorie-tracker
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

### API Endpoints

- `GET /api/meals`: Retrieve all meals
- `POST /api/meals`: Add a new meal
- `PUT /api/meals/:id`: Update a meal
- `DELETE /api/meals/:id`: Delete a meal

## Implementation Details

### Backend Implementation
The backend follows the MVC pattern:
- **Models**: Mongoose schema for meal data with validation
- **Controllers**: Separate logic for handling CRUD operations
- **Routes**: RESTful API endpoints with proper error handling
- **Middleware**: Custom error handling and input validation

### Frontend Implementation
The React frontend is organized into reusable components:
- **Components**: 
  - `MealForm.jsx`: Handles meal data input and updates
  - `MealList.jsx`: Displays meal data in a grid layout
  - `CalorieSummary.jsx`: Shows total calories and daily breakdown
- **Pages**:
  - `Dashboard.jsx`: Main container managing state and API calls
- **Styles**:
  - Modern CSS with Grid and Flexbox
  - Responsive design for all device sizes

### Database Schema
```javascript
Meal {
  name: String,          // Name of the meal
  calories: Number,      // Calorie count
  category: String,      // Breakfast/Lunch/Dinner/Snacks
  date: Date,           // Date of consumption
  notes: String         // Optional notes about the meal
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.