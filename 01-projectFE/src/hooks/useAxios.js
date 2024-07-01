import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, options = {method:'get', data:null}, autoFetch = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const reponse = await axios({url, ...options});
      setData(reponse.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(autoFetch){
      const startFetch = async () => {
        fetchData()
      }
      startFetch();
    }
  }, [url, options.method, options.data]);

  return {
    data,
    error,
    loading,
    fetchData
  };
};

export default useAxios;
