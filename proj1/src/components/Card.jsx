import '../styles/Card.css';
import Checkbox from './Checkbox.jsx';
import Ratings from './Ratings.jsx';
import { useEffect, useState } from 'react';

export default function Card ({carModel, carColors, data}) {
    // console.log(props);
    const [color, setColor] = useState(carColors[0]);
    const [ratingImagePrice, setRatingImagePrice] = useState(getRating(carModel, color));
    const formattedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(ratingImagePrice.price);

    useEffect(() => {
        setRatingImagePrice(getRating(carModel, color));
    }, [color]);

    function getRating(modelName, modelColor) {
        const matchingItem = data.find(item => item.name === modelName && item.color === modelColor);
      
        if (matchingItem) {
          return {"rating": matchingItem.rating, "image": matchingItem.image, "price": matchingItem.price};
        } else {
          return null; // No matching item found
        }
    }
    
    // console.log(rating);
    return (
        <div className="card-wrapper">
            <div className="card-image-wrapper">
                <img className="card-image" src={ratingImagePrice.image} alt="car" />      
            </div>
            <h3 className="card-heading">{carModel}</h3>
            <div className="card-details">
                <h3 className="card-details-price">{formattedCurrency}</h3>
                <small className="card-details-color">{color} </small>
                <Checkbox carColors={carColors} onColorChange={(color) => {setColor(color)}}/>
                <Ratings rating={ratingImagePrice.rating}/>
            </div>
        </div>
    );
}