import React from 'react';

const CalorieSummary = ({ meals }) => {
    const calculateTotalCalories = () => {
        return meals.reduce((total, meal) => total + meal.calories, 0);
    };

    const calculateDailyCalories = () => {
        const dailyCalories = {};
        meals.forEach(meal => {
            const date = new Date(meal.date).toLocaleDateString();
            dailyCalories[date] = (dailyCalories[date] || 0) + meal.calories;
        });
        return dailyCalories;
    };

    const totalCalories = calculateTotalCalories();
    const dailyCalories = calculateDailyCalories();

    const today = new Date().toLocaleDateString();
    const todayCalories = dailyCalories[today] || 0;

    return (
        <div className="calorie-summary">
            <h2>Calorie Summary</h2>
            <div className="summary-cards">
                <div className="summary-card today">
                    <h3>Today's Calories</h3>
                    <p className="calorie-count">{todayCalories}</p>
                    <div className="progress-bar">
                        <div 
                            className="progress" 
                            style={{ 
                                width: `${Math.min((todayCalories / 2000) * 100, 100)}%`,
                                backgroundColor: todayCalories > 2000 ? '#e74c3c' : '#2ecc71'
                            }}
                        />
                    </div>
                    <p className="target-info">Daily Target: 2000 cal</p>
                </div>
                <div className="summary-card total">
                    <h3>Total Calories</h3>
                    <p className="calorie-count">{totalCalories}</p>
                </div>
                <div className="summary-card average">
                    <h3>Daily Average</h3>
                    <p className="calorie-count">
                        {Object.keys(dailyCalories).length > 0 
                            ? Math.round(totalCalories / Object.keys(dailyCalories).length)
                            : 0
                        }
                    </p>
                </div>
            </div>
            <div className="daily-breakdown">
                <h3>Last 7 Days</h3>
                <div className="daily-chart">
                    {Object.entries(dailyCalories)
                        .sort((a, b) => new Date(b[0]) - new Date(a[0]))
                        .slice(0, 7)
                        .reverse()
                        .map(([date, calories]) => (
                            <div key={date} className="chart-bar">
                                <div 
                                    className="bar-fill"
                                    style={{ 
                                        height: `${Math.min((calories / 2000) * 100, 100)}%`,
                                        backgroundColor: calories > 2000 ? '#e74c3c' : '#2ecc71'
                                    }}
                                />
                                <span className="bar-label">{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default CalorieSummary;
