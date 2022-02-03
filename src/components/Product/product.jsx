import React from 'react';
import './product.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faCartPlus } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
    // console.log(props.product);
    const {name,img,price,category,stock}=props.product;
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                 <h4>{name}</h4>    
                    <h6>by: {category}</h6>
                    <h5>${price}</h5>
                    <p>only {stock} left in stock - order soon</p>
                    <button 
                    onClick={()=> props.handleAddProduct(props.product)}
                     className='main-btn' 
                     ><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> add to cart</button>
            </div>

        </div>
    );
};

export default Product;