import { useState, useEffect, createContext } from 'react';
import { themes } from './theme/theme';
import axios from 'axios';

export const DataContext = createContext({
  gdp: {},
  house: {},
  theme: '' as keyof typeof themes,
  setTheme: (value: keyof typeof themes) => value,
});

export const useFetch = (url: string, initialValue: []) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
      setLoading(false);
    };
    try {
      setLoading(true);
      fetchData();
    } catch (e: any) {
      setErrorMsg(e.message);
    }
  }, [url]);
  if (errorMsg) {
    console.log(errorMsg);
  }

  return { data, errorMsg, loading };
};
