import React, { useRef, useEffect } from "react";
import { useTitleInput } from "./hooks/useTitleInput";
import Counter from "./Counter";
import ReverseWord from "./ReverseWord";

const App = () => {
  const [name, setName] = useTitleInput("");
  const [dishes, setDishes] = useTitleInput([]);
  const ref = useRef();

  const fetchDishes = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
    );
    const data = await res.json();
    setDishes(data);
  };

  useEffect(() => {
    fetchDishes();
  }, []); //[] will simulate componentDidMount

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>
        Level Up Dishes
      </h1>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      <div>{name}</div>
      <ReverseWord value={name} />
      <Counter />

      {dishes.map(dish => (
        <article className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => (
              <span>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default App;
