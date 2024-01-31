import '../styles/Checkbox.css';
import SingleCheckbox from './SingleCheckbox.jsx';

export default function Checkbox({carColors, onColorChange, selectedColor}) {

    return (
        <div className='checkmarks-wrapper'>
            {carColors.map((color) =>  (<SingleCheckbox color={color} onColorChange={onColorChange} name="color" selected={selectedColor === color} />))}
        </div>      
    );
}

