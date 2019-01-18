import React from "react";
import RestaurantCard from './RestaurantCard';
import './RestaurantList.css'
import data from '../data/ArrayOfRestaurants';// does the same thing
// eslint-disable-next-line no-unused-vars
import dataJSON from '../data/Restaurants';// does the same thing

// Todo:
/*
  - map through the uniqueCuisines and build lists that also map through the restaurant ^
  - don't hard code the cuisines and think of implementing the filter search ^
  - 
*/

const uniqueCuisines = [...new Set(data.map(e => e.cuisine))];
// eslint-disable-next-line no-unused-vars
const uniqueNames = [...new Set(data.map(e => e.name))];


// eslint-disable-next-line no-unused-vars
let pizzaArr = data.filter(ele => ele.cuisine === 'Pizza');
// eslint-disable-next-line no-unused-vars
let burgerArr = data.filter(ele => ele.cuisine === 'Burgers');

// console.log('dataJSON from .json', dataJSON);
// console.log('data from .js:', data);
// console.log('uniqueCuisines:', uniqueCuisines);
// console.log('uniqueNames:', uniqueNames);
// console.log('pizzaArr:', pizzaArr);
// console.log('burgerArr:', burgerArr);

// const test = uniqueCuisines.map((cuisine, ind) =>
//   data.filter(restaurant => restaurant.cuisine === cuisine).map((restaurant, index) =>
//     (
//       `This is ${restaurant.name} and we serve ${cuisine.toLocaleLowerCase()}. We scored a ${restaurant.rating} rating on R${'ESTAURANTEUR'.toLowerCase()}.`
//     )
//   ).join('\n\n')
// ).join('\n\n\n');
// console.log(test);

const numColors = {
  1: "red",
  2: "blue",
  3: "green",
  4: "purple",
  5: "pink",
  6: "yellow",
  7: "orange",
  8: "lime",
  9: "cyan",
  10: "gray",
}

// const randNumStr = () => (Math.floor(Math.random() * uniqueCuisines.length) + 1).toString();
// console.log(numColors[`${randNumStr()}`]);

class RestaurantList extends React.Component {
  state = {
    allRestaurantsRating: data,
  }

  findByRating = (rating) => {
    let selectedRestaurant = data.filter((ele) => ele.rating === rating)
    console.log('**clicked**', selectedRestaurant);
    return selectedRestaurant;
  };

  render() {
    return (
      uniqueCuisines.map((cuisine, index) => (
        <section id={`${cuisine.toLowerCase()}-wrapper`} className="RestaurantList" key={index}>
          <hr style={{ borderColor: numColors[index + 1] }} />
          <h2
            className="type-cuisine"
            style={{
              borderLeft: `${numColors[index + 1]} 15px solid`,
              borderRight: `${numColors[index + 1]} 15px solid`,
            }}>
            {cuisine}
          </h2>
          <hr style={{ borderColor: numColors[index + 1] }} />
          <ul id={`${cuisine.toLowerCase()}-list`} className="restaurant-list">
            {
              data.filter(restaurant => restaurant.cuisine === cuisine).map((restaurant, ind) =>
                (
                  <RestaurantCard key={ind} findByRating={this.findByRating} data={restaurant} color={numColors[index + 1]} />
                )
              )
            }
          </ul>
        </section>
      ))
    );
  }
}
export default RestaurantList;

// My Old Way (hard coded cuisines)
/*
<div id="lists-wrapper" className="RestaurantList">
  <div id="list-Pizza" className="list">
    <h2 className="type-cuisine">Pizza</h2>
    <hr />
    <ul className="restaurant-list">
      {
        pizzaArr.map((restaurant, index) => {
          return (
            <RestaurantCard key={index} data={restaurant} />
          );
        })
      }
    </ul>
  </div>

  <div id="list-Burgers" className="list">
    <h2 className="type-cuisine">Burgers</h2>
    <hr />
    <ul className="restaurant-list">
      {
        burgerArr.map((restaurant, index) => {
          return (
            <RestaurantCard key={index} data={restaurant} />
          );
        })
      }
    </ul>
  </div>
</div>
*/
