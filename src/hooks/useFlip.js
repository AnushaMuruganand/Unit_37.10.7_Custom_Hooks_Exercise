import React, { useState } from "react";

const useFlip = (initialState) => {
    const [flip, setFlip] = useState(initialState);

    const handleFlip = () => {
        setFlip(flip => !flip);
    }

    return [flip, handleFlip];
};

export default useFlip;