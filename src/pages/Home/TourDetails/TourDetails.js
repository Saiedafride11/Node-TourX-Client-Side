import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../../hooks/useData';
import TourDetailsSummery from '../TourDetailsSummery/TourDetailsSummery';
import './TourDetails.css';

const TourDetails = () => {
    const {tourId} = useParams();
    const [tours] = useData();
    const [carts, setCart] = useState();

    useEffect(() => {
        const tour = tours?.filter((tour) => tour._id === tourId);
        setCart(tour);
      }, [tours]);

   
    return (
        <div className="py-5">
            <h2 className="pb-3 text-center" style={{color: '#ff7f47'}}>Booking Your Favorite Place</h2>
            <div className="container">
                {   
                        carts?.length === 0 ?
                        <h2 style={{color: '#ff7f47', marginTop: '50px'}}>Loading...</h2>
                        :
                        carts?.map(tour => <TourDetailsSummery tour={tour} key={tour._id}></TourDetailsSummery>)
                }
            </div>
        </div>
    );
};

export default TourDetails;