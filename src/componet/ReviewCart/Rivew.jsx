import React from 'react';
import './Rivew.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

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
            <button onClick={()=>eventHandler(id)} className='button'>
            <FontAwesomeIcon className='button-icon' icon={ faTrashAlt} />
            </button>
        </div>
    );
};

export default Rivew;