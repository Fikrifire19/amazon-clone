import React from 'react';

import { useStateValue } from './StateProvider';
import './Checkout.css';

import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png" alt="bannerAds" />
                <div>
                    <h2 className="checkout-title">
                        Your Shopping Cart
                    </h2>
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
            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
