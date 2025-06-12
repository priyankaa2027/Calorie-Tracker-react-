const Meal = require('../models/meal');
const { validationResult } = require('express-validator');

// Get all meals
const getAllMeals = async (req, res) => {
    try {
        const meals = await Meal.find().sort({ date: -1 });
        res.status(200).json(meals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching meals', error: error.message });
    }
};

// Get a single meal by ID
const getMealById = async (req, res) => {
    try {
        const meal = await Meal.findById(req.params.id);
        if (!meal) {
            return res.status(404).json({ message: 'Meal not found' });
        }
        res.status(200).json(meal);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching meal', error: error.message });
    }
};

// Create a new meal
const createMeal = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const meal = new Meal(req.body);
        const savedMeal = await meal.save();
        res.status(201).json(savedMeal);
    } catch (error) {
        res.status(500).json({ message: 'Error creating meal', error: error.message });
    }
};

// Update a meal
const updateMeal = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const meal = await Meal.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!meal) {
            return res.status(404).json({ message: 'Meal not found' });
        }
        res.status(200).json(meal);
    } catch (error) {
        res.status(500).json({ message: 'Error updating meal', error: error.message });
    }
};

// Delete a meal
const deleteMeal = async (req, res) => {
    try {
        const meal = await Meal.findByIdAndDelete(req.params.id);
        if (!meal) {
            return res.status(404).json({ message: 'Meal not found' });
        }
        res.status(200).json({ message: 'Meal deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting meal', error: error.message });
    }
};

module.exports = {
    getAllMeals,
    getMealById,
    createMeal,
    updateMeal,
    deleteMeal
};
