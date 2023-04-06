import React from 'react';
import './Rivew.css'
import { ArchiveBoxIcon,  } from '@heroicons/react/24/solid'

const Rivew = ({ product, eventHandler }) => {
    const { name, img, id, price, quantity } = product
 
    return (
        <div className='rivew-item'>
            <img src={img} alt="" />
            <div className='item-container'>
                <p className='item-title'>{name}</p>
                <p>Price: <span className='orang'>${price}</span></p>
                <p>Order Quantity: <span className='orang'>${quantity}</span></p>
            </div>
            <button onClick={()=>eventHandler(id)} className='button'><ArchiveBoxIcon className="button-icon" /></button>
        </div>
    );
};

export default Rivew;