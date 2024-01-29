import Card from './Card.jsx';
import '../styles/CardsList.css';

export default function CardsList(props) {
    return (
        <div className='cards-list'>
            {props.data.map((car) => <Card car={car}/>)}
        </div>
    );
}