import './Card.css'

import React from 'react';

const Cart = ({cart}) => {

let total= 0;
    for(const product of cart){
        total= total + product.price
    }
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
              <p>Selected product: {cart.length}</p>
              <p>Total price:${total}</p>
              <p>Total Shipping: $</p>
              <p>Text: </p>
              <p>Grand Total:$</p>

        </div>
    );
};

export default Cart;