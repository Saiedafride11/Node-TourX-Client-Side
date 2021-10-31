import React from 'react';
import { Table } from 'react-bootstrap';
import useOrder from '../../hooks/useOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ManageOrders = () => {
    const [orders, setOrders] = useOrder();
    document.title = 'Manage Order';
    
    // Delete
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            const url = `https://cryptic-mountain-31100.herokuapp.com/orders/${id}`;
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

    // Update 
    const updateInfo = {
        status: 'Approve',
    }
    const handleUpdateStatus = id => {
        const url = `https://cryptic-mountain-31100.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("Order Accepted");
            }
        })
    }

 
    return (
        <div className="container py-5">
            <div className="mx-auto">
                {
                    orders?.length === 0 ?
                    <h2 style={{textAlign:"center", color: '#ff7f47'}}>No Show Any Order</h2>
                    :
                    <Table  hover responsive="sm" style={{border: '1px solid #ff7f47'}}>
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th> </th>
                            </tr>
                        </thead>
                        {
                            orders?.map((order, i) => <tbody key={order._id}>
                                <tr>
                                    <td>{i}</td>
                                    <td style={{textTransform: 'capitalize'}}>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.title}</td>
                                    <td>{order.date}</td>
                                    <td className="text-success">{order.status}</td>
                                    <td>
                                        <button onClick={() => handleUpdateStatus(order._id)} className="btn btn-success">Approve</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteOrder(order._id)} className="btn text-white" style={{backgroundColor: '#ff7f47'}}><FontAwesomeIcon icon={faTrashAlt} /></button>
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