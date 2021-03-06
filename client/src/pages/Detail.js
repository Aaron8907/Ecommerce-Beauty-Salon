    import React, { useEffect, useState } from 'react';
    import { Link, useParams } from 'react-router-dom';
    import { useQuery } from '@apollo/client';

    import Cart from '../components/Cart';
    import { useStoreContext } from '../utils/GlobalState';
    import {
        REMOVE_FROM_CART,
        UPDATE_CART_QUANTITY,
        ADD_TO_CART,
        UPDATE_PRODUCTS,
    } from '../utils/actions';
    import { QUERY_PRODUCTS } from '../utils/queries';
    import { idbPromise } from '../utils/helpers';
    import spinner from '../assets/spinner.gif';
    import Footer from "../components/Footer";

    function Detail() {
        const [state, dispatch] = useStoreContext();
        const { id } = useParams();

        const [currentProduct, setCurrentProduct] = useState({});

        const { loading, data } = useQuery(QUERY_PRODUCTS);

        const { products, cart } = state;

        useEffect(() => {
            // already in global store
            if (products.length) {
                setCurrentProduct(products.find((product) => product._id === id));
            }
            // retrieved from server
            else if (data) {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: data.products,
                });

                data.products.forEach((product) => {
                    idbPromise('products', 'put', product);
                });
            }
            // get cache from idb
            else if (!loading) {
                idbPromise('products', 'get').then((indexedProducts) => {
                    dispatch({
                        type: UPDATE_PRODUCTS,
                        products: indexedProducts,
                    });
                });
            }
        }, [products, data, loading, dispatch, id]);

        const addToCart = () => {
            const itemInCart = cart.find((cartItem) => cartItem._id === id);
            if (itemInCart) {
                dispatch({
                    type: UPDATE_CART_QUANTITY,
                    _id: id,
                    purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
                });
                idbPromise('cart', 'put', {
                    ...itemInCart,
                    purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
                });
            } else {
                dispatch({
                    type: ADD_TO_CART,
                    product: { ...currentProduct, purchaseQuantity: 1 },
                });
                idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
            }
        };

        const removeFromCart = () => {
            dispatch({
                type: REMOVE_FROM_CART,
                _id: currentProduct._id,
            });

            idbPromise('cart', 'delete', { ...currentProduct });
        };

        return (
            <>
                {currentProduct && cart ? (
                    <section className="container my-1 login">
                        <div className="l-data">
                            <h1>No te pierdas nuestras promociones</h1>
                            <p>Al ser estar registrad@ en nuestra tienda tendr??s acceso a nuestros descuentos en productos inspirados para tu salud y belleza.</p>
                        </div>
                        <div className="l-wrapper">
                            <div className="left detail">
                                <img
                                    src={`/images/${currentProduct.image}`}
                                    alt={currentProduct.name}
                                />
                            </div>
                            <div className="right">
                                <div className="product-data">
                                    <h2>{currentProduct.name}</h2>
                                    <p className="description">{currentProduct.description}</p>
                                    <p className="price">
                                        <strong>Price: ${currentProduct.price}{' '}</strong>
                                        <div className="button-container">
                                            {`${currentProduct.quantity}` <= 0 ?
                                                <button style={{display: 'none'}} id={`${currentProduct._id}`}
                                                        onClick={addToCart}>Add to Cart</button>
                                                :
                                                <button style={{display: 'block'}} id={`${currentProduct._id}`}
                                                        onClick={addToCart}>Add to Cart</button>
                                            }
                                                <button
                                                disabled={!cart.find((p) => p._id === currentProduct._id)}
                                                onClick={removeFromCart}
                                            >
                                                Remove from Cart
                                            </button>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link className="btn-signup product" to="/">??? Back to Products</Link>
                    </section>
                ) : null}
                {loading ? <img src={spinner} alt="loading" /> : null}
                <Footer/>
                <Cart />
            </>
        );
    }

    export default Detail;