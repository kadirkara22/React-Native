import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])


    const fetchData = async () => {
        try {
            const { data } = await axios.get(url)
            setData(data.results)
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [url]);

    return { error, loading, data }
}
export default useFetch;