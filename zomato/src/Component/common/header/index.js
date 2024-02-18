import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header max-width">
      <img className="header-logo"
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
          <i className="fi fi-rr-search absolute-centre search-icon"></i>
          <input placeholder="Search for a restuarant, cusine or a dish" className="search-input" />
          </div>
         </div>
        <div className="profile">
          <img className="profile-image"
          src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Error" srcset="" />
          <span className="Username">Sajal</span>
          <i className="fi fi-rr-caret-down absolute-centre arrow"></i>
         </div>
      </div>
    </div>
  );
};

export default Header;