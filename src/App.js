import React, { useState } from "react";
import { useTitleInput } from "./hooks/useTitleInput";

const App = () => {
  const [name, setName] = useTitleInput("");

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      {name}
    </div>
  );
};

export default App;
