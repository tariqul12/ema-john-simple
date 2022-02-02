import React, { useState } from 'react';
import './Shop.css';
import FakeData from './../../fakeData/products.json'
import Product from '../Product/product';
const Shop = () => {
    console.log(FakeData)
    const first10= FakeData.slice(0,10);
    
     const [products,setproduct]=useState(first10);

     
    return (
        <div className='shop-container'>
            
            <div className="product-container">
              <h1>{products.length}</h1> 
                {
                    products.map(product=><Product product={product}></Product>)
                }
            </div>
            <div className="cart">
                <h1>this is cart</h1>
            </div>
            
        </div>
    );
};

export default Shop;