import { useEffect, useState } from "react";

export const usePaginatedFetch = (url, page = 0, size = 10, status) => {
  console.log("usePaginatedFetch: ", url)
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      let fullUrl = `${url}?page=${page}&size=${size}`;
      if (status) {
        fullUrl += `&status=${status}`;
      }

      const response = await fetch(fullUrl);
      const json = await response.json();

      setData(json.content || []);
      setTotalPages(json.totalPages || 0);
      setLoading(false);
    };

    fetchData();
  }, [url, page, size, status]);

  console.log("ROWDATA: ", data);
  return { data, totalPages, loading };
};