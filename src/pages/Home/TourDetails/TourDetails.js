import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useData from '../../../hooks/useData';
import './TourDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCalendarWeek, faStar, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const TourDetails = () => {
    const {tourId} = useParams();
    const [tours] = useData();
    const [carts, setCart] = useState();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const tour = tours?.filter((tour) => tour._id === tourId);
        setCart(tour);
      }, [tours]);

    const onSubmit = data => console.log(data);
    return (
        <div className="py-5">
            <div className="container">
                {   
                        carts?.length === 0 ?
                        <h2 style={{color: '#ff7f47', marginTop: '50px'}}>Loading...</h2>
                        :
                        carts?.map(tour => <div key={tour._id}>
                            <div className="tour-details">
                                <div>
                                    <img src={tour.img} className="w-75" alt="" />
                                    <div className="ps-3">
                                        <h5 className="card-title pt-2">{tour.title}</h5>
                                        <p className="card-text" style={{color: '#ff7f47'}}><small><strong>{tour.price}</strong></small></p>
                                    </div>
                                    <div className="text-muted ps-3 pt-1">
                                        <div className="d-flex align-item-center">
                                            <p className="card-text me-3"><small><FontAwesomeIcon icon={faUserCircle} /> {tour.person}</small></p>
                                            <p className="card-text"><small><FontAwesomeIcon icon={faCalendarWeek} /> {tour.day}</small></p>
                                        </div>
                                        <div className="d-flex align-item-center pb-2">
                                            <p className="card-text me-3"><small><FontAwesomeIcon className="text-warning" icon={faStar} /> {tour.ratting}</small></p>
                                            <p className="card-text"><small><FontAwesomeIcon icon={faMapMarkerAlt} /> {tour.location}</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="confirm-order my-auto">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input defaultValue="Name" {...register("name", { required: true, maxLength: 20 })} required/>
                                        <input defaultValue="Email" {...register("email", { required: true, maxLength: 20 })} required/>
                                        <input defaultValue="Phone" {...register("phone", { required: true, maxLength: 20 })} required/>
                                        <select defaultValue="Tickets Type" {...register("ticket", { required: true, maxLength: 20 })} required>
                                            <option value="type">Tickets Type</option>
                                            <option value="bus">Travel With Bus</option>
                                            <option value="ship">Travel With Ship</option>
                                            <option value="plane">Travel With Plane</option>
                                        </select>
                                        <input defaultValue="Date" type="date" {...register("date", { required: true, maxLength: 20 })} required/>
                                        <textarea {...register("description")} placeholder="Message" style={{height: '80px'}} required/>
                                        <input type="submit" className="btn w-75 text-white"  style={{backgroundColor: '#ff7f47'}}/>
                                    </form>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default TourDetails;