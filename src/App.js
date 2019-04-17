import React, { useRef } from "react";
import { useTitleInput } from "./hooks/useTitleInput";
import Counter from "./Counter";
import ReverseWord from "./ReverseWord";

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add("new-fake-class")}>
        Level Up Dishes
      </h1>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      <div>{name}</div>
      <ReverseWord value={name} />
      <Counter />
    </div>
  );
};

export default App;
