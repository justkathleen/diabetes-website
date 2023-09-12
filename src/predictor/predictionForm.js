import React, { useState } from 'react';
import './predictionForm.css'


function PredictionForm()
{
    const [name, setName] = useState('');
    const [gender, setGender] = useState(0);
    const [age, setAge] = useState(0);
    const [hypertension, setHypertension] = useState(0);
    const [heartDisease, setHeartDisease] = useState(0);
    const [smoker, setSmoker] = useState(0);
    const [BMI, setBMI] = useState(0);
    const [HbA1c, setHbA1c] = useState(0);
    const [glucose, setGlucose] = useState(0);
    const [prediction, setPrediction] = useState('');

    const handleNameChange = (event) =>
    {
        setName(event.target.value)
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const handleHypertensionChange = (event) => {
        setHypertension(event.target.value);
    }

    const handleHeartDiseaseChange = (event) => {
        setHeartDisease(event.target.value);
    }

    const handleSmokerChange = (event) => {
        setSmoker(event.target.value);
    }

    const handleHbA1cChange = (event) => {
        setHbA1c(event.target.value);
    }

    const handleGlucoseChange = (event) => {
        setGlucose(event.target.value);
    }

    const handleBMIChange = (event) => {
        setBMI(event.target.value);
    }

    const handleSubmit = async (event)=> {
        event.preventDefault(); // prevent default behaviour when submitting such as reloading page

        try {
            const predictionParameter = {
                'name' : name,
                'gender' : gender,
                'age' : age,
                'hyperTension' : hypertension,
                'heartDisease' : heartDisease,
                'smoker' : smoker,
                'BMI' : BMI,
                'HbA1c' : HbA1c,
                'glucose' : glucose
            }
            /*
            const response = await fetch('http://localhost:5000/prediction', {
                method: 'POST', 
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(predictionParameter)
            });
*/

            const response = await fetch('http://localhost:5000/prediction', {
                method: "POST",
                headers: {
                     "Content-Type": "application/json"
                },
                body: JSON.stringify(predictionParameter)
     });

            const data = await response.json();
            console.log(predictionParameter);
            setPrediction(data.prediction);
        } catch(error)
        {
            console.error("Error:", error.message);
            console.error("error");
        }
    }

    return(
        <div>
            <h2> Diabetes predictor model </h2>
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                <label className="label">Name</label>
                <span className="colon">:</span>
                <input type = "text" value={name} onChange={handleNameChange}></input>
                <br></br>
                </div>

                <div className="form-row">
                <label className="label">Gender</label>
                <span className="colon">:</span>
                <label className="radio-label-left">
                    <input type="radio" name="gender" value={0} onChange={handleGenderChange}/>
                    Female
                </label>
                <label>
                    <input type="radio" name="gender" value={1} onChange={handleGenderChange}/>
                    Male
                </label>
                <br></br>
                </div>

                <div className="form-row">
                <label className="label">Age</label>
                <span className="colon">:</span>
                <input type = "number" value={age || ""} onChange={handleAgeChange}></input>
                <br></br>
                </div>

                <div className="form-row">
                <label className="label">BMI</label>
                <span className="colon">:</span>
                <input type = "number" value={BMI || ""} onChange={handleBMIChange}></input>
                <br></br>
                </div>

                <div className="form-row">
                <label className="label">HbA1c</label>
                <span className="colon">:</span>
                <input type = "number" value={HbA1c || ""} onChange={handleHbA1cChange}></input>
                <br></br>
                </div>

                <div className="form-row">
                <label className="label">Glucose</label>
                <span className="colon">:</span>
                <input type = "number" value={glucose || ""} onChange={handleGlucoseChange}></input>
                <br></br>
                </div>

                <div className="form-row">
                <label className="label"> Do you have hypertension?</label>    
                <span className="colon"></span>        
                <label>
                    <input type="radio" name="hypertension" value={1} onChange={handleHypertensionChange}/>
                    Yes
                </label>
                <label>
                    <input type="radio" name="hypertension" value={0} onChange={handleHypertensionChange}/>
                    No
                </label>
                <br></br>
                </div>

                <div className="form-row">
                <label className="label"> Do you have any heart disease?</label>
                <label>
                    <input type="radio" name="heartdisease" value={1} onChange={handleHeartDiseaseChange}/>
                    Yes
                </label>
                <label>
                    <input type="radio" name="heartdisease" value={0} onChange={handleHeartDiseaseChange}/>
                    No
                </label>
                <br></br>
                </div>

                <div className="form-row">
                <label className="label"> Are you a smoker?</label>
                
                <label>
                    <input type="radio" className="radio" name="smoker" value={3} onChange={handleSmokerChange}/>
                    Yes
                </label>
                <label>
                    <input type="radio" name="smoker" value={1} onChange={handleSmokerChange}/>
                    No
                </label>
                <label>
                    <input type="radio" name="smoker" value={2} onChange={handleSmokerChange}/>
                    Former
                </label>
                <label>
                    <input type="radio" name="smoker" value={0} onChange={handleSmokerChange}/>
                    Prefer not to say
                </label>
                <br></br>
                </div>
                <button type="submit">predict</button>
            </form>
            <p> {prediction}</p>
        </div>
        </div>
    )
}

export default PredictionForm;