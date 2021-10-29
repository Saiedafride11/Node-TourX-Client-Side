import React from 'react';
import './ToursSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCalendarWeek, faStar, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const ToursSummery = (props) => {
    const {title, price, ratting, day, person, location, img, _id} = props.tour;
    const history = useHistory();

    const handleBooking = () => {
        history.push(`/tour/${_id}`)
    }
    return (
        <div className="row row-cols-1 g-4 p-2">
            <div className="col img-scale-main">
                <div className="card h-100 pb-3">
                    <div className="img-scale">
                        <img src={img} className="card-img-top w-100" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{color: '#ff7f47'}}><small><strong>{price}</strong></small></p>
                        <div className="text-muted">
                            <div className="d-flex align-item-center">
                                <p className="card-text me-3"><small><FontAwesomeIcon icon={faUserCircle} /> {person}</small></p>
                                <p className="card-text"><small><FontAwesomeIcon icon={faCalendarWeek} /> {day}</small></p>
                            </div>
                            <div className="d-flex align-item-center">
                                <p className="card-text me-3"><small><FontAwesomeIcon className="text-warning" icon={faStar} /> {ratting}</small></p>
                                <p className="card-text"><small><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3">
                        <button onClick={handleBooking} className="btn w-100 text-white"  style={{backgroundColor: '#ff7f47'}}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToursSummery;