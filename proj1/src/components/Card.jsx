import '../styles/Card.css';
import Checkbox from './Checkbox.jsx';
import Ratings from './Ratings.jsx';

export default function Card (props) {
    const colors = ['Red', 'Blue', 'Green'];
    const rating = 3;
    console.log(props);
    const formattedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(props.car.price);

    return (
        <div className="card-wrapper">
            <div className="card-image-wrapper">
                <img className="card-image" src={props.car.image} alt="car" />      
            </div>
            <h3 className="card-heading">{props.car.name}</h3>
            <div className="card-details">
                <h3 className="card-details-price">{formattedCurrency}</h3>
                {/* <small className="card-details-color">{props.car.color} </small> */}
                <Checkbox />
                <Ratings />
            </div>
        </div>
    );
}