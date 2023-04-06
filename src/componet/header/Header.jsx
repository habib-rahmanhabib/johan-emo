import './Header.css'
import React from 'react';
import img from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={img} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/Login">Login</Link>
            </div>
           
            
        </div>
    );
};

export default Header;