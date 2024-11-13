import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import { useStateValue } from '../StateProvider';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (        
        <div className="header">
            <Link to="/">
                <img src="./amazon-logo-main.png" className="header-logo" />
            </Link>
            

            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">
                <div className=" header-option-main">
                    <span className="header-option-one">Hello, Guest</span>
                    <span className="header-option-two">Sign In</span>
                </div>

                <div className="header-option">
                    <span className="header-option-one">Returns</span>
                    <span className="header-option-two">& Orders</span>
                </div>

                <div className="header-option">
                    <span className="header-option-one">Your</span>
                    <span className="header-option-two">Prime</span>
                </div>
            </div>

           
                <div className="header-option-basket">
                    <ShoppingCartOutlinedIcon className="header-basket-icon" />
                    <span className="header-option-two header-basket-count">{basket?.length}</span>
                </div>
            
        </div>
    )
}

export default Header
