import React, { useState } from 'react';
import Cart from '../cart/Cart';
import './Order.css'
import { removeFromDb } from '../../fakedb';


import { useLoaderData } from 'react-router-dom';
import Rivew from '../ReviewCart/Rivew';

const Order = () => {
    const saveCart = useLoaderData();
    const [cart, setCart]= useState(saveCart)
   
    const eventHandler=(id)=>{
        const remaining= cart.filter(product=> product.id !==id);
        setCart(remaining)
        removeFromDb(id)

    }
    return (
        <div className='shop-container'>

            <div className='cart-container'>
                
                {
                    cart.map(product=> <Rivew
                    key={product.id}
                    product={product}
                    eventHandler={eventHandler}

                    ></Rivew>)
                }
            </div>
            <div className='card-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;