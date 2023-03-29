import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.cart);
    const { name, price, img, ratings, seller
    } = props.cart;
    // console.log(name);
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h3 className='cart-name'>{name}</h3>
                <h3 className='cart-price'>price: ${price}</h3>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>

            </div>
            <button onClick={() => handleAddToCart(props.cart)} className='btn-cart'>
                Add to Cart
                <span style={{ marginLeft: '10px' }}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
            </button>
        </div>
    );
};

export default Product;