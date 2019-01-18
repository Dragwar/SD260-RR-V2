import React from "react";
import Filter from './Filter';
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h1 className="title">{"Restauranteur".toLocaleUpperCase()}</h1>
        <div className="search-wrapper">
          <Filter />
        </div>
      </header>
    );
  }
}
export default Header;
