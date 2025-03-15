import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbarLeftSide'>
            <Link className='navbarLeftSideLink' to='/'>Home</Link>
            <Link className='navbarLeftSideLink' to='/shop'>Shop</Link>
        </div>
        <div className='navbarRightSide'>
            <ShoppingCartIcon className='.navbarShoppingCart' />
        </div>
    </div>
  )
}
