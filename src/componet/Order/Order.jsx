import React, { useState } from 'react';
import Cart from '../cart/Cart';
import './Order.css'
import { removeFromDb } from '../../fakedb';
import { deleteShoppingCart } from '../../fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

import { useLoaderData } from 'react-router-dom';
import Rivew from '../ReviewCart/Rivew';

const Order = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart)

    const eventHandler = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)

    }
    const cartEventHandler = () => {
        setCart([])
        deleteShoppingCart()

    }
    return (
        <div className='shop-container'>

            <div className='cart-container'>

                {
                    cart.map(product => <Rivew
                        key={product.id}
                        product={product}
                        eventHandler={eventHandler}

                    ></Rivew>)
                }
            </div>
            <div className='card-container'>
                <Cart
                    cart={cart}
                    cartEventHandler={cartEventHandler}
                >
                    <div>
                        <button className='link-btn'>
                            <Link className='text-btn' to="/checkout">Proceed Checkout
                                <FontAwesomeIcon icon={faCalendarDay } />
                            </Link>
                        </button>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Order;