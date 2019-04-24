import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper teal">
                <div className="container">
                    <Link to="/" className="brand-logo">Bazaar</Link>
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;