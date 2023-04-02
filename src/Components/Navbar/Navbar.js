import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
// import About from '../About/About';
import Cart from '../Cart/Cart';
// import Contacts from '../Contacts/Contacts';
// import Delivery from '../Delivery/Delivery';
import Candels from '../Products/Candels';
import './Navbar.css'
import { 
    AiOutlineMenu, 
    AiOutlineClose, 
    AiOutlineShoppingCart, 
    AiOutlineHome, 
    AiOutlineHeart, 
} from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    return <Router>
        <div className='container'>
            <div className='logo_image'>
                <p><AiOutlineHeart/></p>
            </div>
            <nav className={nav ? 'menu active': 'menu'}> 
                <Link to='/' className='link'><AiOutlineHome/></Link>
                <Link to='/Cart' className='link'><AiOutlineShoppingCart/></Link>
                {/* <Link to='/Delivery' className='link'>Delivery&payment</Link>
                <Link to='/About' className='link'>About us</Link>
                <Link to='/Contacts' className='link'>Contact us</Link> */}
            </nav>
            <div onClick={() => setNav(!nav)} className={'mobile_btn'}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
        </div>
        <Routes>
            <Route path='/' element={<Candels/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            {/* <Route path='/Delivery' element={<Delivery/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contacts' element={<Contacts/>}/> */}
        </Routes>

    </Router>
}

export default Navbar;
