import React from 'react'
import logo1 from '../img/images.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from '../StateProvider'
import { auth } from "../firebase";
function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthcation = () =>{
        if (user) {
           auth.signOut();
        }
    }

    return (
        <div className="header">
           <Link to="/"> 
           <img className="logo" src={logo1} alt=""/> 
           </Link>
            <div className="search">
                <input className="sach__input" type="text"/>
                <SearchIcon className="search__icon" />

            </div>
            <div className="hader__navbar">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthcation} className="navbar__option">
                   <span className="navbar__optionOne">hello piaus</span>
                   <span className="navbar__optionTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                <div className="navbar__option">
                <span className="navbar__optionOne">Returns</span>
                   <span className="navbar__optionTwo">& order</span>
                </div>
                <div className="navbar__option">
                <span className="navbar__optionOne">Your</span>
                   <span className="navbar__optionTwo">Prime</span>     
                </div>
                <Link to="/checkout">
                <div className="header__basket">
                   <ShoppingBasketIcon />
    <span className="navbar__optionTwo count">{ basket?.length}</span>
                </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
