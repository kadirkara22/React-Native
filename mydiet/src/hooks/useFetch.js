import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url, {
                headers: {
                    'x-app-id': "909e2c13",
                    'x-app-key': "70e91eacda15bf8d786b2908b46bd087",
                    'x-remote-user-id': "0"
                }
            })
            setData(responseData)
            setLoading(false)

        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { error, loading, data }

}

export default useFetch;