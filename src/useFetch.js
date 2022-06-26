import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        //console.log(response.data);
        var names = [];
        console.log(response.data.causes[0].name);

      for (let i = 0; i < response.data.causes.length; i++) {
        names.push(response.data.causes[i].name);
        }
        console.log(names);
        //console.log(names.name);
      })

      
     
      //loop through to get name 
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
      
  }, [url]);

  

  const refetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch };
}

export default useFetch;
