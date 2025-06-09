import React from "react";
import useFetch from "../hooks/useFetch";

const DataDisplayComponent = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default DataDisplayComponent;