import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

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
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__options" onClick={handleAuth}>
            <span className="header__optionsLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionsLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__options">
            <span className="header__optionsLineOne">Returns</span>
            <span className="header__optionsLineTwo">& orders</span>
          </div>
        </Link>
        <div className="header__options">
          <span className="header__optionsLineOne">Your</span>
          <span className="header__optionsLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionsBasket">
            <ShoppingBasket />
            <div className="header__basketCount">{basket?.length}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
