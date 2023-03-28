import './Product.css'
import React from 'react';

const Product = (props) => {
    console.log(props)
    const{name, price, ratings, img, seller}= props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
            <h4>Price: ${price}</h4>
            <p>Manufactur:{seller}</p>
            <p>Ratings-star: {ratings}</p>
           </div>
        </div>
    );
};

export default Product;