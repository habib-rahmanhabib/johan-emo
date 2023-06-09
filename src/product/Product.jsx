import './Product.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {


    const { name, price, ratings, img, seller } = props.product;
    const eventHandler = props.eventHandler

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <h4>Price: ${price}</h4>
                <p>Manufactur:{seller}</p>
                <p>Ratings-star: {ratings}</p>
            </div>
            <button onClick={() => eventHandler(props.product)} className='product-button'>Add to card
                  <FontAwesomeIcon icon={ faShoppingCart} />
            </button>


        </div>
    );
};

export default Product;