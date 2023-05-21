import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ApiContext = createContext();

const ApiProvider = ({ children, urlSuffix }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        debugger
        const response = await axios.get(`http://localhost:3022/${urlSuffix}`);
        // const response = await axios.get(`${process.env.REACT_APP_API_URL}/${urlSuffix}`);
        setData(response.data);
      } catch (error) {
        debugger
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [urlSuffix]);

  return (
    <ApiContext.Provider value={data}>
      {children}
    </ApiContext.Provider>
  )
};

export { ApiContext, ApiProvider }
