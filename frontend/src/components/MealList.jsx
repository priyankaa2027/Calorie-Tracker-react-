import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const MealList = ({ meals, onMealDeleted }) => {
    const [error, setError] = useState('');
    const [deletingMeals, setDeletingMeals] = useState(new Set());

    const handleDelete = async (id) => {
        try {
            setDeletingMeals(prev => new Set(prev).add(id));
            await axios.delete(`${API_BASE_URL}/meals/${id}`);
            if (onMealDeleted) {
                onMealDeleted(id);
            }
        } catch (err) {
            setError('Error deleting meal');
        } finally {
            setDeletingMeals(prev => {
                const newSet = new Set(prev);
                newSet.delete(id);
                return newSet;
            });
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="list-container">
            <h2>Meal History</h2>
            {error && <div className="error-message">{error}</div>}
            <>
                <div className="meals-grid">
                    {meals.map(meal => (
                        <div key={meal._id} className="meal-card">
                            <div className="meal-header">
                                <h3>{meal.name}</h3>
                                <span className={`meal-type ${meal.type.toLowerCase()}`}>
                                    {meal.type}
                                </span>
                            </div>
                            <div className="meal-details">
                                <p><strong>Calories:</strong> {meal.calories}</p>
                                <p><strong>Date:</strong> {formatDate(meal.date)}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(meal._id)}
                                className="delete-btn"
                                disabled={deletingMeals.has(meal._id)}
                            >
                                {deletingMeals.has(meal._id) ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    ))}
                </div>
                {meals.length === 0 && (
                    <p className="no-meals">No meals recorded yet.</p>
                )}
            </>
        </div>
    );
};

export default MealList;
