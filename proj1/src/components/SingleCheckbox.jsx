import { useState } from 'react';
import '../styles/SingleCheckBox.css';

export default function SingleCheckbox ({color, onColorChange, name})
{
    const [check, setCheck] = useState(false);
    return (
        <label className='checkmark-container'>
            <input id={color} className="color-selector" type="radio" value={color} name={name} onClick={(event) => {onColorChange(color)}} />
            <span className='checkmark' style={{ backgroundColor: color }}></span>
        </label>
    );
}