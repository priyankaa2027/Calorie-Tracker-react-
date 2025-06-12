import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import MealForm from '../components/MealForm';
import MealList from '../components/MealList';
import CalorieSummary from '../components/CalorieSummary';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchMeals();
    }, []);

    const fetchMeals = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${API_BASE_URL}/meals`);
            setMeals(response.data);
            setError('');
        } catch (err) {
            setError('Error fetching meals');
        } finally {
            setIsLoading(false);
        }
    };

    const handleMealAdded = (newMeal) => {
        setMeals(prevMeals => [...prevMeals, newMeal]);
    };

    const handleMealDeleted = (deletedMealId) => {
        setMeals(prevMeals => prevMeals.filter(meal => meal._id !== deletedMealId));
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Calorie Tracker</h1>
            </header>
            
            <div className="dashboard-content">
                <div className="form-section">
                    <MealForm onMealAdded={handleMealAdded} />
                </div>
                <div className="list-section">
                    {error && <div className="error-message">{error}</div>}
                    {isLoading ? (
                        <div className="loading">Loading meals data...</div>
                    ) : (
                        <>
                            <CalorieSummary meals={meals} />
                            <MealList 
                                meals={meals}
                                onMealDeleted={handleMealDeleted}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;