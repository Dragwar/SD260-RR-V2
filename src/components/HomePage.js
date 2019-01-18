import React from 'react';
import './HomePage.css';
import Header from './Header';
import RestaurantList from './RestaurantList';
// import Footer from './Footer';

class HomePage extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <div id="background-image"></div>
        <RestaurantList />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default HomePage;