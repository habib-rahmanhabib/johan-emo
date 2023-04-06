import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../../product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart, deleteShoppingCart } from '../../fakedb'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


const Shop = () => {
    const [products, setProducts] = useState([])
    const [card, setCard] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const eventHandler = (product) => {
        const newCard = [...card, product]
        setCard(newCard)
        addToDb(product.id)

    };
    const cartEventHandler = () => {
        setCard([])
        deleteShoppingCart()

    }
    useEffect(() => {
        const storeCart = getShoppingCart()
        const saveCard = []
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCard.push(addedProduct)

            }
        }
        setCard(saveCard)

    }, [products])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        eventHandler={eventHandler}
                    ></Product>)
                }


            </div>
            <div className='card-container'>
                <Cart
                    cart={card}
                    cartEventHandler={cartEventHandler}
                >
                    <div>

                        <button className='link-btn'>
                            <Link className='text-btn' to="/order"> order now
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </Link>
                        </button>
                    </div>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;