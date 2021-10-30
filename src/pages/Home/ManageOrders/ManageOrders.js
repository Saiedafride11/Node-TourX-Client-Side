import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    })

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
                    orders?.length === 0 ?
                    <h2 style={{color: '#ff7f47'}}>Loading...</h2>
                    :
                    <Table  bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Location</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Delete Item</th>
                            </tr>
                        </thead>
                        {
                            orders?.map((order, i) => <tbody key={order._id}>
                                <tr>
                                    <td>{i}</td>
                                    <td>{order.title}</td>
                                    <td style={{textTransform: 'capitalize'}}>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.date}</td>
                                    <td style={{color: '#ff7f47'}}>Pending</td>
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

export default ManageOrders;