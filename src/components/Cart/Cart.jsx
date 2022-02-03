import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart=props.cart;
    let shipping=0;
    let total=0;
    let vat=0
    
    for(let i=0;i<cart.length; i++){
        var product=cart[i];
        console.log(product);
        total=total+product.price;
        shipping=shipping+product.shipping;
         vat= vat+(total/10);
        
    }
    var grandTotal=total+shipping;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Items Ordered :  {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>shipping : ${shipping}</p>
            <p>Tax/Bat : {vat}</p>
            <h6>Total Amount:{grandTotal}</h6>
        </div>
    );
};

export default Cart;