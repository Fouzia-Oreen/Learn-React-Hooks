/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

const UseEffect_01 = () => {
  // 01 counter
  const [count, setCount] = useState(0);
  // use to show the text Hello useEffect
  const [showText, setShowText] = useState(false);
  // use to show the product list
  const [productsList, setProductsList] = useState([]);

  async function fetchAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) {
        setProductsList(result.products);
      }
    } catch (error) {
      error;
    }
  }

  // cleanUp
  // useEffect(() => {
  //   return CleanUp
  // })

  useEffect(() => {
    // showText become true
    if (count === 5) setShowText(true);
  }, [count]);
  useEffect(() => {
    if (count === 7) fetchAllProducts();
  }, [count]);

  // 02 newCount
  const [newCount, setNewCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setNewCount((newCount) => newCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>UseEffect Hook </h1>
      <br></br>
      {/* counter */}
      <p>Count is {count}</p>
      {showText ? <h3>Hello useEffect</h3> : null}

      <button onClick={() => setCount(count + 1)}>Add</button>
      <ul>
        {productsList && productsList.length > 0
          ? productsList.map((item) => <li>{item.title}</li>)
          : null}
      </ul>

      {/* newCount */}
      <h2>I have renedered {newCount} times!</h2>
    </div>
  );
};

export default UseEffect_01;
