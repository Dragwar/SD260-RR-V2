import React from "react";
import './RestaurantCard.css';


class RestaurantCard extends React.Component {
  render() {
    const myData = this.props.data;
    return (
      <li className="RestaurantCard" style={{ backgroundColor: this.props.color }}>
        <img className="restaurant-image" src={this.props.data.image} alt="pic-of-food" />

        <div className="restaurant-info">
          <p className="restaurant-name">
            <span>Name: </span>
            <br />
            {this.props.data.name}
          </p>
          <p className="restaurant-rating">
            <span>Rating: </span>
            {this.props.data.rating}
            <span id="plus" onClick={()=>(this.props.findByRating(myData.rating))}>+</span>
            <span id="minus" onClick={()=>(this.props.findByRating(myData.rating))}>-</span>
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a className="restaurant-link" href="#">Reviews</a>
        </div>
      </li>
    );
  }
}
export default RestaurantCard;
