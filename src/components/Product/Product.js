import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.cart);
    const { name, price, img, ratings, seller
    } = props.cart;
    // console.log(name);
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h3 className='cart-name'>{name}</h3>
                <h3 className='cart-price'>price: ${price}</h3>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>

            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;