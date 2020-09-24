import React from "react";
import "./Nav.css";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
//import { IconButton } from "@material-ui/core";
export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__left">
        <img
          className="nav__logo"
          src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21"
          alt="netflix__logo"
        />
        <h4>Home</h4>
        <h4>TV Shows</h4>
        <h4>Movies</h4>
        <h4>MyList</h4>
        <h4>CHILDREN</h4>
      </div>
      <div className='nav__right'>
          {/* <IconButton>
          <SearchIcon />
          </IconButton> */}
           <SearchIcon />
          <CardGiftcardIcon />
          <NotificationsActiveIcon />
          <ArrowDropDownIcon />
      </div>
    </div>
  );
};

//https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21

