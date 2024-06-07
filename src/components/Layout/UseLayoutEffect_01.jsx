/* eslint-disable no-undef */
import { useEffect, useLayoutEffect, useRef } from "react";

// almost like useEffect
// useEffect is called once the paint process is done by the browser
// useLayoutEffect is called once the component is rendred but until the browser completes the paint process it will not wait before that this hooks will be called

const UseLayoutEffect_01 = () => {

  const divRef = useRef()
  const inputRef = useRef()


  useEffect(() => {
    console.log(" use effect called");
    // the inputRef donot render as page loads
    //inputRef.current.value = 'John'
  }, []);

  useLayoutEffect(() => {
    console.log("use Layout effect called");
    const getDivRefCurrent = divRef.current;
    console.log(getDivRefCurrent);

    getDivRefCurrent.style.opacity = 0;
    setTimeout(() => {
      getDivRefCurrent.style.opacity = 1;
      getDivRefCurrent.style.color = "red";
      inputRef.current.value = 'John'
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Use LayoutEffect HooK</h1>
      <div ref={divRef}>HELLO WORLD</div>
      <input ref={inputRef} type="text" value={'oreen'} />
    </div>
  );
};

export default UseLayoutEffect_01;
