import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [carts, setCarts] = useState([]);
    const [product, setProduct] = useState([]);
    // console.log(product);
    // console.log(carts);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const addedCart = [];
        for (const id in storedCart) {
            const savedCart = carts.find(cart => cart.id === id)
            if (savedCart) {
                const quantity = savedCart[id];
                savedCart.quantity = quantity;
                addedCart.push(savedCart);
            }
        }
        setProduct(addedCart);

    }, [carts])
    const handleAddToCart = (cart) => {
        const newProduct = [...product, cart];
        setProduct(newProduct);
        addToDb(cart.id);

    }

    return (
        <div className='shop-container'>

            <div className='cart-container'>
                {
                    carts.map(cart => <Product
                        key={cart.id}
                        cart={cart}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart product={product}></Cart>
            </div>
        </div >
    );
};

export default Shop;