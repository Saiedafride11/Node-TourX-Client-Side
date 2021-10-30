import React, { useEffect, useState } from 'react';

const useOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch('https://cryptic-mountain-31100.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return [orders, setOrders]
};

export default useOrder;