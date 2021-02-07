import React from 'react'
import './HeaderStyle.css';
import {Link} from 'react-router-dom'


function Header() {
    return (
      
        <nav>
            <div className="logo">SHOPPY</div>
            <ul>
                <Link to="/" style={LinkStyle}>Home</Link>
                <Link to="/products" style={LinkStyle}>Products</Link>
               <Link to="/About-us" style={LinkStyle}>About Us</Link>
               <Link to="/Contact" style={LinkStyle}>Contact</Link>
                
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-cart"></i>

            </div>
        </nav>

        
    )
}
const LinkStyle = {
    textDecoration:'none',
    fontSize: '14px',
   marginLeft: '15px',
   padding: '10px',
   boxSizing: 'border-box',
   color: 'blueviolet',
   cursor: 'pointer'
}
export default Header
