import Card from './Card.jsx';
import '../styles/CardsList.css';
import { useState } from 'react';

export default function CardsList(props) {
    const [rating, setRating] = useState(0);
// Initialize an empty array to store objects with model names and colors
const uniqueModelsAndColorsArray = [];
// Iterate through the data
props.data.forEach(item => {
  const modelName = item.name;
  const modelColor = item.color;
  // Check if the model is already in the array
  const existingModel = uniqueModelsAndColorsArray.find(obj => obj.modelName === modelName);

  if (existingModel) {
    // If the model is already in the array, add the color if it's unique
    if (!existingModel.colors.includes(modelColor)) {
      existingModel.colors.push(modelColor);
    }
  } else {
    // If the model is not in the array, add a new object with the model name and color
    uniqueModelsAndColorsArray.push({
      modelName: modelName,
      colors: [modelColor]
    });
  }
});
    console.log(uniqueModelsAndColorsArray);

    return (
        <div className='cards-list'>
            {uniqueModelsAndColorsArray.map((car) => <Card carModel={car.modelName} carColors={car.colors} data={props.data} />)}
        </div>
    );
}