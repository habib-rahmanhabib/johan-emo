import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../../product/Product';

const Shop = () => {
    const [products, setProducts]=useState([])
    const [card, setCard]=useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const eventHandler =(product)=>{
        const newCard =[...card, product]
        setCard(newCard)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    eventHandler={eventHandler}
                    ></Product>)
                }
                

            </div>
            <div className='card-container'>
              <h3>Order Summary</h3>
              <p>Selected product:{card.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;