import React from "react";
import ProTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>;
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "HaeSnaMul",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2020/06/Seafood_Tteokbokki_01-1-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Stichky Rice",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2012/05/la_sticky_rice_cake_00-1-1.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Steamed Egg",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2020/06/Steamed_Egg_Sidedish_01-.jpg",
    rating: 3,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propType = {
  name: ProTypes.string.isRequired,
  picture: ProTypes.string.isRequired,
  rating: ProTypes.number,
};
export default App;
