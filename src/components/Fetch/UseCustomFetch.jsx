/* eslint-disable react/jsx-key */

import useFetch from "./UseFetch_01";

function UseCustomFetch() {
  const { data, loading } = useFetch("https://dummyjson.com/products", {});
  console.log(loading, data);

  if (loading) {
    return <h1>Loading Data Please Wait!</h1>;
  }

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      <ul>
        {data && data.products && data.products.length > 0 ? (
          data.products.map((item) => <li>{item.title}</li>)
        ) : (
          <h3>No Data</h3>
        )}
      </ul>
    </div>
  );
}

export default UseCustomFetch;
