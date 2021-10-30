import React from 'react';
import './TourDetailsSummery.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCalendarWeek, faStar, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';

const TourDetailsSummery = (props) => {
    const {user} = useAuth();
    const {img, title, price, person, day, ratting, location} = props.tour;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order successfully');
                reset();
            }
        })
    };
    return (
        <div className="container">
            <div className="tour-details">
                <div className="d-flex align-items-center">
                    <div>
                        <img src={img} className="w-100" alt="" />
                        <div>
                            <h5 className="card-title pt-2">{title}</h5>
                            <p className="card-text" style={{color: '#ff7f47'}}><small><strong>{price}</strong></small></p>
                        </div>
                        <div className="text-muted pt-1">
                            <div className="d-flex align-item-center">
                                <p className="card-text me-3"><small><FontAwesomeIcon icon={faUserCircle} /> {person}</small></p>
                                <p className="card-text"><small><FontAwesomeIcon icon={faCalendarWeek} /> {day}</small></p>
                            </div>
                            <div className="d-flex align-item-center order-extra">
                                <p className="card-text me-3"><small><FontAwesomeIcon className="text-warning" icon={faStar} /> {ratting}</small></p>
                                <p className="card-text"><small><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="confirm-order my-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={title} {...register("title")} style={{textTransform: "capitalize"}}required/>
                        <input defaultValue={user.displayName} {...register("name")} style={{textTransform: "capitalize"}}required/>
                        <input defaultValue={user.email} {...register("email")} readOnly/>
                        <input placeholder="Please Type Your Number....." {...register("phone")} required/>
                        <select defaultValue="Tickets Type" {...register("ticket", { required: true, maxLength: 20 })}>
                            <option value="type">Please Select Tickets.....</option>
                            <option value="bus">Travel With Bus</option>
                            <option value="ship">Travel With Ship</option>
                            <option value="plane">Travel With Plane</option>
                        </select>
                        <input defaultValue="person" type="number" {...register("person")} placeholder="Please Select Person" required/>
                        <input defaultValue="Date" type="date" {...register("date")} />
                        <textarea {...register("description")} placeholder="Please Type Your Message....." style={{height: '80px'}} required/>
                        <input type="submit" className="btn w-75 text-white"  style={{backgroundColor: '#ff7f47'}}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TourDetailsSummery;