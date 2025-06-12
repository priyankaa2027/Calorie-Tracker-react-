const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');
const mealValidation = require('../middleware/validation');

// GET all meals
router.get('/', mealController.getAllMeals);

// GET single meal by ID
router.get('/:id', mealController.getMealById);

// POST create new meal
router.post('/', mealValidation, mealController.createMeal);

// PUT update meal
router.put('/:id', mealValidation, mealController.updateMeal);

// DELETE meal
router.delete('/:id', mealController.deleteMeal);

module.exports = router;
