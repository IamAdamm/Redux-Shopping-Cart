import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/Navbar.css'
import { useState } from 'react';
import Cart from '../Components/Cart'; // Assuming Cart is your modal or offcanvas

export default function Navbar() {
  // Create a state to manage the visibility of the cart
  const [showCart, setShowCart] = useState(false);

  // Toggle the visibility of the cart
  const toggleShow = () => setShowCart(!showCart);

  return (
    <div className='navbar'>
        <div className='navbarLeftSide'>
            <Link className='navbarLeftSideLink' to='/'>Home</Link>
            <Link className='navbarLeftSideLink' to='/shop'>Shop</Link>
        </div>
        <div className='navbarRightSide'>
            <button onClick={toggleShow}>
              <ShoppingCartIcon className='.navbarShoppingCart' />
            </button>
        </div>
        {/* Pass showCart and toggleShow as props to Cart */}
        <Cart showCart={showCart} toggleShow={toggleShow} />
    </div>
  );
}
