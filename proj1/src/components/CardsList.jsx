import Card from './Card.jsx';
import '../styles/CardsList.css';
import { useState } from 'react';

export default function CardsList({data, onItemCountChange}) {
    return (
        <div className='cards-list'>
            {data.map((car) => <Card carModel={car.name} carColors={car.colors} carPrices={car.prices} carRatings={car.ratings} carImages={car.images} onItemCountChange={onItemCountChange}/>) }
        </div>
    );
}