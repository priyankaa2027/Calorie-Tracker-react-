const { body } = require('express-validator');

const mealValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Meal name is required')
        .isLength({ min: 2 })
        .withMessage('Meal name must be at least 2 characters long'),
    
    body('calories')
        .notEmpty()
        .withMessage('Calories are required')
        .isInt({ min: 0 })
        .withMessage('Calories must be a positive number'),
    
    body('type')
        .trim()
        .notEmpty()
        .withMessage('Meal type is required')
        .isIn(['Breakfast', 'Lunch', 'Dinner', 'Snack'])
        .withMessage('Meal type must be either Breakfast, Lunch, Dinner, or Snack'),
    
    body('date')
        .optional()
        .isISO8601()
        .withMessage('Invalid date format')
];

module.exports = mealValidation;
