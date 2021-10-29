import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/useData';
import PopularToursSummery from '../PopularToursSummery/PopularToursSummery';
import './PopularTours.css';

const PopularTours = () => {
    const [tours] = useData();
    return (
        <div className="py-5">
            <div className="container">
                <h2 className="pb-3 text-center" style={{color: '#ff7f47'}}>Most Popular Tours</h2>
                <div className="popular-tour-container">
                    {   
                        tours?.length === 0 ?
                        <h2 style={{color: '#ff7f47', marginTop: '50px'}}>Loading...</h2>
                        :
                        tours?.slice(0, 6).map(tour => <PopularToursSummery tour={tour} key={tour._id}></PopularToursSummery>)
                    }
                </div>
                <div className="text-center mt-3">
                    <Link to="/tours">
                        <button className="btn w-25 text-white"  style={{backgroundColor: '#ff7f47'}}>All Tours</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularTours;