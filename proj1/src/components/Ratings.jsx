import '../styles/Ratings.css';
import star from '../assets/images/star.jpg';

export default function Ratings() {

    return (
    <div className="rating" aria-label="rating of this item is 3 out of 5">
        <img src={star} alt='star'  className="rating--star rating--star__active" />
        <img src={star} className="rating--star rating--star__active" />
        <img src={star} className="rating--star rating--star__active" />
        <img src={star} className="rating--star" />
        <img src={star} className="rating--star" />
    </div>
    );
}