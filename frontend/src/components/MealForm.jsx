import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';

const MealForm = ({ onMealAdded }) => {
    const [formData, setFormData] = useState({
        name: '',
        calories: '',
        type: 'Breakfast',
        date: new Date().toISOString().split('T')[0]
    });    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear error when user starts typing
        setError('');
    };    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/meals`, formData);
            setFormData({
                name: '',
                calories: '',
                type: 'Breakfast',
                date: new Date().toISOString().split('T')[0]
            });
            setError('');
            if (onMealAdded) {
                onMealAdded(response.data);
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message 
                || err.response?.data?.errors?.[0]?.msg
                || 'Error adding meal';
            setError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Meal</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Meal Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="calories">Calories:</label>
                    <input
                        type="number"
                        id="calories"
                        name="calories"
                        value={formData.calories}
                        onChange={handleChange}
                        required
                        min="0"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="type">Meal Type:</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Adding...' : 'Add Meal'}
                </button>
            </form>
        </div>
    );
};

export default MealForm;
