import { useState } from "react";
const initialToggleText = false;

const UseState_01 = () => {
  // 01 - toggle button
  const [toggleText, setToggleText] = useState(initialToggleText);
  function handleToggleText() {
    setToggleText(!toggleText);
  }
  return (
    <>
      <h2>UseState Hook </h2>
      {/* toggle button */}
      <div>
        {toggleText ? <h3>Hello world</h3> : null}
        <button onClick={handleToggleText}>Toggle Text</button>
      </div>

      {/*  */}
    </>
  );
};

export default UseState_01;
