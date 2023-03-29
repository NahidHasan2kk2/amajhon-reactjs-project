import React from 'react';
import './Cart.css'

const Cart = ({ product }) => {
    // console.log(product);
    let totalPrice = 0;
    let shippingCharge = 0;
    // let quantity = 0;



    for (const cart of product) {
        totalPrice = totalPrice + cart.price;
        shippingCharge = shippingCharge + cart.shipping;
        // quantity = quantity + cart.quantity;

    }
    const tex = totalPrice * 7 / 100;
    const grandTotal = totalPrice + tex;


    return (
        <div className='cart-details-box'>
            <h1>Order Summery</h1>
            <p>Selected items: </p>
            <p>Total price:  ${totalPrice}</p>
            <p>Total shipping charge: {shippingCharge} </p>
            <p>Tex:  ${tex.toFixed(2)}</p>
            <h3>Grand total:  ${grandTotal.toFixed(2)}</h3>

        </div>
    );
};

export default Cart;