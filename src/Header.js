import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchIn" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav"></div>
      <div className="header__options">
        <span className="header__optionsLineOne">Hello Guest</span>
        <span className="header__optionsLineTwo">Sign in</span>
      </div>
      <div className="header__options">
        <span className="header__optionsLineOne">Returns</span>
        <span className="header__optionsLineTwo">& orders</span>
      </div>
      <div className="header__options">
        <span className="header__optionsLineOne">Your</span>
        <span className="header__optionsLineTwo">Prime</span>
      </div>
      <Link to='/checkout'>
        <div className="header__optionsBasket">
          <ShoppingBasket />
          <div className="header__basketCount">0</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
