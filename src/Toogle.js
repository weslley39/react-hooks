import React, { useState } from "react";
import DishForm from "./DishForm";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Open</button>
      {isToggled && <DishForm setToggle={setToggle} />}
    </div>
  );
};

export default Toggle;
