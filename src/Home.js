import React from 'react'
import './Home.css'

import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home-container" >
                <img className="home-image " src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt="banner" />
                <div className="home-row">
                    <Product id="123456789" title="Contoh Produk" price={123000} image="https://m.media-amazon.com/images/I/519sWMqdyML._AC_UL480_FMwebp_QL65_.jpg" rating={5}/>
                    <Product id="123456789" title="Contoh Produk" price={123000} image="https://m.media-amazon.com/images/I/519sWMqdyML._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
                </div>
                <div className="home-row">
                    <Product id="123456789" title="Contoh Produk" price={123000} image="https://m.media-amazon.com/images/I/519sWMqdyML._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
                    <Product id="123456789" title="Contoh Produk" price={123000} image="https://m.media-amazon.com/images/I/519sWMqdyML._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
                    <Product id="123456789" title="Contoh Produk" price={123000} image="https://m.media-amazon.com/images/I/519sWMqdyML._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
                </div>
                <div className="home-row">
                    <Product id="123456789" title="Contoh Produk" price={123000} image="https://m.media-amazon.com/images/I/519sWMqdyML._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
