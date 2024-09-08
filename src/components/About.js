import React from 'react'
import './about.css'

export default function About() {
  return (
    <div>
      <div className='bmr-info-container'>
      <h2>About the BMR Calculator</h2>
      <p>
        The <strong>Basal Metabolic Rate (BMR) Calculator App</strong> is designed to help you understand your body's energy requirements at rest. By calculating your BMR, the app estimates the number of calories your body needs to maintain essential physiological functions such as breathing, circulation, and cell production, even when you're not engaging in any physical activity.
      </p>

      <h3>What is BMR?</h3>
      <p>
        Basal Metabolic Rate (BMR) is the amount of energy expended per day at rest. It represents the minimum number of calories your body needs to sustain basic life functions, including maintaining body temperature, breathing, and pumping blood.
      </p>

      <h3>Factors Affecting BMR</h3>
      <ul>
        <li>
          <strong>Age:</strong> As you age, your BMR tends to decrease. This is because muscle mass, which burns more calories than fat, tends to decrease with age.
        </li>
        <li>
          <strong>Gender:</strong> Males typically have a higher BMR than females due to a higher proportion of muscle mass.
        </li>
        <li>
          <strong>Weight:</strong> Heavier individuals generally have a higher BMR because they have more body tissue to maintain.
        </li>
        <li>
          <strong>Height:</strong> Taller individuals may have a higher BMR because they have a larger body surface area.
        </li>
        <li>
          <strong>Body Composition:</strong> Muscle tissue burns more calories at rest than fat tissue. Therefore, individuals with a higher muscle mass will have a higher BMR.
        </li>
        <li>
          <strong>Hormonal Balance:</strong> Thyroid hormones play a significant role in regulating metabolism. An imbalance in these hormones can increase or decrease BMR.
        </li>
        <li>
          <strong>Environmental Temperature:</strong> Extreme cold or hot temperatures can increase BMR as the body works harder to maintain a stable internal temperature.
        </li>
        <li>
          <strong>Physical Activity:</strong> Regular physical activity can increase BMR by building muscle mass and improving overall metabolic efficiency.
        </li>
      </ul>

      <h3>Importance of Knowing Your BMR</h3>
      <p>
        Understanding your BMR is crucial for effective weight management. It serves as a baseline for determining your daily caloric needs. By knowing your BMR, you can:
      </p>
      <ul>
        <li>Plan a personalized diet that aligns with your weight goals.</li>
        <li>Avoid under-eating or overeating by adjusting your calorie intake based on your activity level.</li>
        <li>Track your progress as you work towards a healthier lifestyle.</li>
      </ul>

      <p>
        The BMR Calculator App not only helps you estimate your BMR but also provides insights into how various factors can affect your metabolism, empowering you to make informed decisions about your health and fitness.
      </p>
    </div>
    </div>
  )
}
