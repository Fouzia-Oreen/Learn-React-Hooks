/* eslint-disable react/jsx-key */
// It allow us to remember a particular computed value between renders mainly used for performance improvement purposes
import { useEffect, useState, useMemo } from "react";

const UseMemo_01 = () => {
  // useMemo(() => first, [second]);
  const [data, setData] = useState([]);

  async function fetchAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) setData(result.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // console.log(data);

  function filterProductsByPrice(getProducts) {
    // fetch the products then if the product length is greter then 0 them filter each products(item) that has price > 50
    return getProducts && getProducts.length > 0
      ? getProducts.filter((item) => item.price > 50)
      : [];
  }

  const memoriseFilterProductsByPrice = useMemo(() => filterProductsByPrice(data), [data])

  // theme
  const [theme, setTheme] = useState();

  return (
    <div>
      <h1>Use Memo Hook</h1>
      {/* when you get the getProducts iterate it through each item and map method and list it on li */}
      <ul>
        {memoriseFilterProductsByPrice.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <button  onClick={() => {setTheme(!theme)}} >Toggle Button</button>
      <h2>{theme ? 'Light' : 'Dark'}</h2>
    </div>
  );
};

export default UseMemo_01;
