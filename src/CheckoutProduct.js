import React from 'react'
import './CheckoutProduct.css'

import { useStateValue } from './StateProvider'

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-image" src={image} />
            <div className="checkoutProduct-info" >
                <p className='checkoutProduct-title'>{title}</p>
                <p className='checkoutProduct-price'>
                    <small>Rp.</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct-rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>&#65121;</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromCart}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}


export default CheckoutProduct