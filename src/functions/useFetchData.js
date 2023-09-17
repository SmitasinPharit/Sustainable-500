import { useState, useEffect } from "react";

const useFetchData = (input) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const jsonData = await response.json();
        const filteredData = jsonData.filter(item => item.ticker.toLowerCase() === input);
        setData(filteredData[0]); // Assuming there's only one matching result
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    if (input !== "") {
      fetchData();
    }
  }, [input]);

  return { data, loading };
};

export default useFetchData;
