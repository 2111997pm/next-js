import { useState, useCallback } from "react";
import axios from "axios";

const useApi = (baseURL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (endpoint, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios({
          method,
          url: `${baseURL}${endpoint}`,
          data: body,
          headers,
        });

        if (response.data) {
          setData(response.data);
        }
      } catch (err) {
        setError(err.response ? err.response.data : "An error occurred");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [baseURL]
  );

  return { data, error, loading, fetchData };
};

export default useApi;
