import "./textform.css";
import React, { useState } from 'react';

// Mifflin-St Jeor Equation for Men
function calculateMifflinStJeorMale(weight, height, age) {
  return 10 * weight + 6.25 * height - 5 * age + 5;
}

// Mifflin-St Jeor Equation for Women
function calculateMifflinStJeorFemale(weight, height, age) {
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

export default function Textform() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmr, setBmr] = useState(null);
  const [activity, setActivity] = useState('');
  const [gain, setGain] = useState(null);
  const [loss, setLoss] = useState(null);

  const set = bmr * 1.2;
  const mod = bmr * 1.3;
  const act = bmr * 1.5;
  const very = bmr * 1.7;

  const handleCalculate = () => {
    if (age && height && weight && gender) {
      const ageNum = parseInt(age, 10);
      const heightNum = parseInt(height, 10);
      const weightNum = parseFloat(weight);

      let calculatedBmr;
      if (gender === 'male') {
        calculatedBmr = calculateMifflinStJeorMale(weightNum, heightNum, ageNum);
      } else if (gender === 'female') {
        calculatedBmr = calculateMifflinStJeorFemale(weightNum, heightNum, ageNum);
      }
      setBmr(calculatedBmr);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleCal = () => {
    if (activity) {
      let activityMultiplier;
      if (activity === 'sedentary') activityMultiplier = 1.2;
      else if (activity === 'moderate') activityMultiplier = 1.3;
      else if (activity === 'active') activityMultiplier = 1.5;
      else if (activity === 'very-active') activityMultiplier = 1.7;

      const calculatedCalories = bmr * activityMultiplier;
      setGain(calculatedCalories + 300);
      setLoss(calculatedCalories - 300);
    }
  };

  const handleReset = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setGender('');
    setBmr(null);
    setActivity('');
    setGain(null);
    setLoss(null);
  };

  return (
    <div className="flex-container">
      {/* Form Section */}
      <div className="form-container">
        <div className="num row-flex gap-3">
          <strong>Age:</strong>
          <input
            type="text"
            placeholder="Enter your age"
            style={{ width: '150px' }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <p>Ages 15-80</p>
        </div>

        <div className="Gender">
          <div className="row-flex gap-3">
            <strong>Gender:</strong>
            <div>
              <input
                className="M-f width"
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              <label className="M-l" htmlFor="male">Male</label>
            </div>
            <div>
              <input
                className="M-f"
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              <label className="M-l" htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <div className="num row-flex gap-3">
          <strong>Height:</strong>
          <input
            type="text"
            placeholder="Enter your height in cm"
            style={{ width: '150px' }}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <p>Height in cm</p>
        </div>

        <div className="num row-flex gap-3">
          <strong>Weight:</strong>
          <input
            type="text"
            placeholder="Enter your weight in kg"
            style={{ width: '150px' }}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <p>Weight in kg</p>
        </div>

        <div className="button-container">
          <button className="btn calculate" onClick={handleCalculate}>Calculate</button>
          <button className="btn reset" onClick={handleReset}>Reset</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Activity Level</th>
              <th>Calories</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sedentary: little or no exercise</td>
              <td>{set}</td>
              <td className="centered-radio">
                <input
                  type="radio"
                  name="activity"
                  id="sedentary"
                  value="sedentary"
                  checked={activity === 'sedentary'}
                  onChange={() => setActivity('sedentary')}
                />
              </td>
            </tr>
            <tr>
              <td>Moderate 1-3 times/week</td>
              <td>{mod}</td>
              <td className="centered-radio">
                <input
                  type="radio"
                  name="activity"
                  id="moderate"
                  value="moderate"
                  checked={activity === 'moderate'}
                  onChange={() => setActivity('moderate')}
                />
              </td>
            </tr>
            <tr>
              <td>Active 4-5 times/week</td>
              <td>{act}</td>
              <td className="centered-radio">
                <input
                  type="radio"
                  name="activity"
                  id="active"
                  value="active"
                  checked={activity === 'active'}
                  onChange={() => setActivity('active')}
                />
              </td>
            </tr>
            <tr>
              <td>Very Active exercise daily, or physical job</td>
              <td>{very}</td>
              <td className="centered-radio">
                <input
                  type="radio"
                  name="activity"
                  id="very-active"
                  value="very-active"
                  checked={activity === 'very-active'}
                  onChange={() => setActivity('very-active')}
                />
              </td>
            </tr>
            {gain !== null && loss !== null && (
              <>
                <tr>
                  <th>Goal</th>
                  <th>Calories</th>
                </tr>
                <tr>
                  <td>Muscle-Gain</td>
                  <td>{gain}</td>
                </tr>
                <tr>
                  <td>Fat-Loss</td>
                  <td>{loss}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <div className="button-container">
          <button className="btn" onClick={handleCal}>Calculate Goals</button>
        </div>
      </div>
    </div>
  );
}


            
    
  