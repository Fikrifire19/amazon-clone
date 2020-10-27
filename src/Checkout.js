import React from 'react';

import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_OnSite_Concepts_R3_DesktopStripe_1500x120_v1.png" alt="bannerAds" />
                <div>
                    <h2 className="checkout-title">
                        Your Shopping Cart
                    </h2>
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
