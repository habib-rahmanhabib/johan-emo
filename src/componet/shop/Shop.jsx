import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from '../../product/Product';

const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
                

            </div>
            <div className='card-container'>
              <h1>eantry</h1>
            </div>
            
        </div>
    );
};

export default Shop;