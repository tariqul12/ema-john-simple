import React, { useState } from 'react';
import './Shop.css';
import FakeData from './../../fakeData/products.json'
import Product from '../Product/product';
import Cart from '../Cart/Cart';
const Shop = () => {
    // console.log(FakeData)
    const first10= FakeData.slice(0,15);
    
     const [products,setproduct]=useState(first10);
     const [cart,setCart] = useState([]);

     const handleAddProduct=(product) =>{
        //  console.log("button click",product);
         const newCart=[...cart,product];
         setCart(newCart);
     }

     
    return (
        <div className='shop-container'>
            
            <div className="product-container">
                {
                    products.map(pd=> <Product 
                                        handleAddProduct={handleAddProduct} 
                                        product={pd}
                                        ></Product>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;