import React from 'react'
import { Link } from 'react-router-dom';

import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ cart }, dispatch] = useStateValue();


    return (
        <div className="header">
            <Link to="/">
                <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            </Link>
            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-searchIcon" />
            </div>
            <div className="header-nav" >
                <Link to='/login'>
                    <div className="header-option">
                        <span className="header-optionLineOne">
                            Hello User
                        </span>
                        <span className="header-optionLineTwo" >
                            Sign In
                        </span>
                    </div>
                </Link>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Returns
                    </span>
                    <span className="header-optionLineTwo" >
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">
                        Your
                    </span>
                    <span className="header-optionLineTwo" >
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header-optionBasket" >
                        <ShoppingBasketIcon />
    <span className="header-optionLineTwo header-basketCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
