import { useState } from "react";
const initialToggleText = false;
const initialSelectOption = {
  name: "",
  city: "",
};

const UseState_01 = () => {
  // 01 - toggle button
  const [toggleText, setToggleText] = useState(initialToggleText);
  function handleToggleText() {
    setToggleText(!toggleText);
  }

  // 02 - Select rendering
  const [selectName, setSelectName] = useState({ initialSelectOption });

  // 03 - Counter
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>UseState Hook </h1>
      {/* toggle button */}
      <div>
        <h2>Toggle Button </h2>
        {toggleText ? <h3>Hello world</h3> : null}
        <button onClick={handleToggleText}>Toggle Text</button>
      </div>
      <br></br>
      {/* Select rendering */}
      <h2>Select options </h2>
      <div>
        <input
          onChange={(event) => {
            setSelectName({
              ...selectName,
              [event.target.name]: event.target.value,
            });
          }}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <select
          onChange={(event) => {
            setSelectName({
              ...selectName,
              [event.target.name]: event.target.value,
            });
          }}
          name="city"
          id=""
        >
          <option value={""}>Select City</option>
          <option value={"dhaka"}>Dhaka</option>
          <option value={"shylet"}>Shylet</option>
          <option value={"chittagong"}>Chittagong</option>
        </select>
        <div>
          <p>Name is {selectName.name}</p>
          <p>City is {selectName.city}</p>
        </div>
      </div>
      <br></br>
      {/* Counter */}
      <h2>Counter</h2>
      {counter ? <p>The counter number is {counter}</p> : null}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter Increase
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Counter Decrease
      </button>
    </>
  );
};

export default UseState_01;
