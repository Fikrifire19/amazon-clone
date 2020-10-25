import React from 'react'
import './Product.css'


function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product-info" >
                <p>{title}</p>
                <p className="product-price">
                    <small>Rp.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>&#65121;</p>
                    ))}
                </div>
            </div>
            <img className="product-image" src={image} alt="imageProduct" />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
