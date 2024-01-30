import '../styles/Checkbox.css';

export default function Checkbox() {
    return (
        <div className='checkmarks-wrapper'>
            <label className='checkmark-container'>
                <input className="color-selector" type="checkbox" checked />
                <span className='checkmark'></span>
            </label>
        </div>      
    );
}