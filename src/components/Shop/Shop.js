import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [carts, setCarts] = useState([]);
    // console.log(carts);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    return (
        <div className='shop-container'>

            <div className='cart-container'>
                {
                    carts.map(cart => <Product
                        key={cart.id}
                        cart={cart}
                    ></Product>)
                }
            </div>
            <div>
                <h1>here is the cart info</h1>
            </div>
        </div>
    );
};

export default Shop;