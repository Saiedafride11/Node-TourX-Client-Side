import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';

const MyOrder = () => {
    const [orders, setOrders] = useOrder();
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState();

    useEffect(() => {
        const tour = orders?.filter(order => order.email === user.email);
        setMyOrders(tour)
      }, [orders]);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
            }
    }
    return (
        <div className="container py-5">
            <div className="mx-auto">
                {
                    myOrders?.length === 0 ?
                    <h2 style={{color: '#ff7f47'}}>Loading...</h2>
                    :
                    <Table hover responsive="sm" style={{border: '1px solid #ff7f47'}}>
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Location</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Delete Order</th>
                            </tr>
                        </thead>
                        {
                            myOrders?.map((order, i) => <tbody key={order._id}>
                                <tr>
                                    <td>{i}</td>
                                    <td>{order.title}</td>
                                    <td style={{textTransform: 'capitalize'}}>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.date}</td>
                                    <td>
                                        <button  onClick={() => handleDeleteOrder(order._id)} className="btn text-white" style={{backgroundColor: '#ff7f47'}}>Cancel</button>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </Table>
                }
            </div>
        </div>
    );
};

export default MyOrder;