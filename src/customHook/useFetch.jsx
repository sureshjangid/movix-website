import React, { useEffect, useState } from "react";
import { fetchDatafromApi } from "../utils/api";

const useFetch = (url) => {
    console.log(url,'url')
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [erorr, setErorr] = useState(null);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setErorr(null);

    fetchDatafromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        setLoading(false);
        setErorr("Something went wrong!");
      });
  }, [url]);
  return {data,loading,erorr};
};

export default useFetch;
