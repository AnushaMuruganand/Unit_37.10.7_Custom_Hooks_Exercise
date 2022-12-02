import React, { useState } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

function useAxios(baseUrl, initialState, keyForLS) {
    
    const [data, setData] = useLocalStorage(keyForLS, initialState);

    const handleChange = async (formatter = data => data, restOfUrl = "") => {
        const res = await axios.get(`${baseUrl}${restOfUrl}`);
        
        setData(data => [...data, formatter(res.data)]);
    }

    const handleDelete = () => {
        setData(initialState);
    }

    return [data, handleChange, handleDelete];
}

export default useAxios;