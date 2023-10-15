import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiHandler({ apiUrl, onDataFetched }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        if (onDataFetched) {
          onDataFetched(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiUrl, onDataFetched]);


  return null;
}
