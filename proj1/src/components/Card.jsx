import '../styles/Card.css';
import Checkbox from './Checkbox.jsx';
import Ratings from './Ratings.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import bag from '../assets/images/bag.png';

export default function Card ({carModel, carColors, carPrices, carRatings, carImages, onItemCountChange}) {
    const [selectedColor, setSelectedColor] = useState(carColors[0]);
    const [selectedVariant, setSelectedVariant] = useState({"price": carPrices[0], "image": carImages[0], "rating": carRatings[0]});
    const [hover, setHover] = useState(false);

    // console.log(selectedColor);
    useEffect(() => {
        async function fetchCar() {
            try {
                const response = await axios.get('https://server-wheat-eight.vercel.app/get_car', {
                    params: {
                        model: carModel,
                        color: selectedColor
                    }
                });

                setSelectedVariant({"price" : response.data.price, "image" : response.data.image, "rating": response.data.rating});
            } catch (error) {
                
            }
        }

        fetchCar();
    }, [selectedColor]);
    
    function handleColorChange (color) {
        setSelectedColor(color);
    }

    const formattedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(selectedVariant.price);
    
    const defaultImage = (
        <div className="card-image-wrapper" >
            <img className="card-image" src={selectedVariant.image} alt="car" onMouseOver={() => {setHover(true);}} onMouseOut={() => {setHover(false);}} />
        </div>
        );

    const hoverImage = (
        <div className="card-image-wrapper" >
            <img className="card-image hover-image" src={selectedVariant.image} alt="car" onMouseOver={() => {setHover(true);}} onMouseOut={() => {setHover(false);}} />
            <img className='bag' src={bag} onClick={handleBagClick} onMouseOver={() => {setHover(true);}}/>  
        </div>    
    );

    function handleBagClick() {
        onItemCountChange(true);
    }

    return (
        <div className="card-wrapper" key={selectedVariant.image} >
                {hover ? hoverImage : defaultImage}    
            <h3 className="card-heading">{carModel}</h3>
            <div className="card-details">
                <h3 className="card-details-price">{formattedCurrency}</h3>
                <small className="card-details-color">{selectedVariant.color}</small>
                <Checkbox carColors={carColors} onColorChange={handleColorChange} selectedColor={selectedColor}/>
                <Ratings rating={selectedVariant.rating} />
            </div>
        </div>
    );
}