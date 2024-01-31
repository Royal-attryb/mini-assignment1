import cart from '../assets/images/cart.png'
import '../styles/NavBar.css';

export default function Navbar({items}) {
    return (
        <div className='navbar-wrapper'>
            <div className='cart-wrapper'>
                <img src={cart} alt="cart" className='cart'/>
                <span className='item-count'>{items}</span>
            </div>
        </div>
    );
} 