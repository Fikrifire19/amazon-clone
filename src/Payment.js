import React from 'react'
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

import './Payment.css'

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment-container">
                <h1>
                    Checkout (
                        <Link to="/checkout">
                            {cart?.length} items
                        </Link>
                    )
                </h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Majalengk, Jawa Barat</p>
                    </div>
                </div>

                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment-items">
                        {cart.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment