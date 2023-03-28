import './Header.css'
import React from 'react';
import img from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={img} alt="" />
            <div>
                <a href="/Order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
           
            
        </div>
    );
};

export default Header;