import { useEffect, useState } from "react";


const useData = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('/tour.json')
        .then(res => res.json())
        .then(data => {
            setTours(data)
        })
    })
    return [tours]
};

export default useData;