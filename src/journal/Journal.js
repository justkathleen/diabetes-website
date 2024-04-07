import './Journal.css'
import React, { useState } from 'react';
import FoodList from './FoodList';

export default function Journal()
{
    const [breakfastItem, setBreakfastItem] = useState([]);
    const [lunchItem, setLunchItem] = useState([]);
    const [snackItem, setSnackItem] = useState([]);
    const [dinnerItem, setDinnerItem] = useState([]);

    const getTotalSugar = () => {
        let total_sugar = 0;

        for(let i = 0; i < breakfastItem.length;i++) {
            total_sugar += breakfastItem[i].sugar_g;
        }
        if(total_sugar > 25) {
            return `You have reached your total sugar intake for the day.`            
        } else if (total_sugar >= 15 && total_sugar <= 25) {
            return `You have consumed ${total_sugar} grams of sugar. It is recommended to consume less than
            25 grams of sugar` 
        } else {
            return ``
        }
    }

    return (
        <div className="about-container">
            <h1> Welcome to nutrition tracker! </h1>
            <div>
                <p>{getTotalSugar()}</p>
            </div>
            <div className='breakfast'>
                <div>
                    <h2 className='table-title'>Breakfast</h2>
                    <FoodList foodArray={breakfastItem} setFoodArray={setBreakfastItem} />
                </div>
            </div>
            <div className='lunch'>
                <div>
                    <h2 className='table-title'>Lunch</h2>
                    <FoodList foodArray={lunchItem} setFoodArray={setLunchItem} />
                </div>
            </div>
            <div className='snack'>
                <div>
                    <h2 className='table-title'>Snack</h2>
                    <FoodList foodArray={snackItem} setFoodArray={setSnackItem} />
                </div>
            </div>
            <div className='dinner'>
                <div>
                    <h2 className='table-title'>Dinner</h2>
                    <FoodList foodArray={dinnerItem} setFoodArray={setDinnerItem} />
                </div>
            </div>
        </div>
    )
}