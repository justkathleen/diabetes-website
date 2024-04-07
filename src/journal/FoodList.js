import React, { useState } from "react";
import classes from './FoodList.css'

const FoodList=({ foodArray, setFoodArray  })=> {
    const [foodText, setFoodText] = useState('3lb carrots');

    const getCalories = async (query) => {
        const apiKey = 'wMFZk04E0kriRodxKnbmLA==osFz8EESQeruNtLr';
        const url = `https://api.calorieninjas.com/v1/nutrition?query=${query}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    const deleteItem=(name) => {
        const newList = foodArray.filter(record => record.name !== name);
        setFoodArray(newList);
    }

    const addFoodButton = async () => {
        const result = await getCalories(foodText);
        setFoodArray(prevFoodArray => [...prevFoodArray, ...result.items]);
    };

    const handleInputFoodText = async (event) => {
        setFoodText(event.target.value);
    };

    return(
        <div>
            <div>
                <table id='food-table'>
                    <thead>
                        <tr>
                            <th>Food Item</th>
                            <th>Calories</th>
                            <th>Carbohydrate</th>
                            <th>Protein</th>
                            <th>Sugar</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foodArray.map((row, i)=> (
                                <tr key={i}>
                                    <td>{row.name}</td>
                                    <td>{row.calories}</td>
                                    <td>{row.carbohydrates_total_g}</td>
                                    <td>{row.protein_g}</td>
                                    <td>{row.sugar_g}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>{deleteItem(row.name)}}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="input-food">
            <input type="text" value={foodText} onChange={handleInputFoodText} />
                <button onClick={addFoodButton}>Add Food</button>
            </div>
        </div>
    )
}

export default FoodList;