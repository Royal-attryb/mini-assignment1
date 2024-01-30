import '../styles/Ratings.css';
import star from '../assets/images/star.jpg';

// export default function Ratings({rating}) {

//     return (
//     <div className="rating">
//         <p>{rating}</p>
//         <img src={star} alt='star'  className="rating--star rating--star__active" />
//         <img src={star} className="rating--star rating--star__active" />
//         <img src={star} className="rating--star rating--star__active" />
//         <img src={star} className="rating--star" />
//         <img src={star} className="rating--star" />
//     </div>
//     );
// }

export default function Ratings({ rating }) {
    const maxStars = 5; // Assuming a maximum of 5 stars
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= maxStars; i++) {
        const isActive = i <= rating; // Check if the star should be active based on the rating
        stars.push(
          <img
            key={i}
            src={star}
            alt={`star ${i}`}
            className={`rating--star ${isActive ? 'rating--star__active' : ''}`}
          />
        );
      }
      return stars;
    };
  
    return <div className="rating">{renderStars()}</div>;
  }