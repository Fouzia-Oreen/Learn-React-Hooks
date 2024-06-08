/* eslint-disable react-hooks/exhaustive-deps */
// Eg : the modal popup --> passing the URL as a parameter based on the we will get the data
// Advantage : Code will be cleaner, the hook can be used to different component with different parameters
import { useEffect, useState } from "react";

const UseFetch_01 = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // call the API
  async function fetchAllData() {
    setLoading(true);

    try {
      const response = await fetch(url, {
        ...options,
      });
      const result = await response.json();

      if (result) {
        setLoading(false);
        setData(result);
      }
    } catch (error) {
      error;
    }
  }

  // get the data from API
  useEffect(() => {
    fetchAllData();
  }, []);

  return loading, data;
};

export default UseFetch_01;
