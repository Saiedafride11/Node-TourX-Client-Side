import { useEffect, useState } from "react";


const useData = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-mountain-31100.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => {
            setTours(data)
        })
    }, [])
    return [tours]
};

export default useData;