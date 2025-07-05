import { useState, useEffect } from 'react';

/**
 * Fetch example Json data
 * Not recommended for production use!
 */
export const useFetchJson = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            // Note error handling is omitted here for brevity
            const response = await fetch(url);                
            const json = await response.json();
            setData(json);
            setLoading(false);
        };
        fetchData();
    }, [url]);
    return { data, loading };
};
