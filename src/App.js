import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I love {name}</h2>;
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "HaeSnaMul",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2020/06/Seafood_Tteokbokki_01-1-1.jpg",
  },
  {
    name: "Stichky Rice",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2012/05/la_sticky_rice_cake_00-1-1.jpg",
  },
  {
    name: "Steamed Egg",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2020/06/Steamed_Egg_Sidedish_01-.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
