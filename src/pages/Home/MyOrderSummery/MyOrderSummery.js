import React from 'react';
import { Table } from 'react-bootstrap';

const MyOrderSummery = (props) => {
    const {title, name, email, date} = props.order;
    const {i} = props;
    return (
        <div>
            <Table striped bordered hover responsive="sm" style={{width: '100%'}}>
                    <tr style={{width: '100%'}}>
                        <td style={{width: '4%'}}>{i}</td>
                        <td style={{width: '15%'}}>{title}</td>
                        <td style={{width: '10%', textTransform: 'capitalize'}}>{name}</td>
                        <td style={{width: '12%'}}>{email}</td>
                        <td style={{width: '8%'}}>{date}</td>
                        <td style={{width: '10%'}}>Pending</td>
                        <td style={{width: '10%'}}>
                            <button className="btn text-white" style={{backgroundColor: '#ff7f47'}}>Cancel</button>
                        </td>
                    </tr>
            </Table>
        </div>
    );
};

export default MyOrderSummery;