import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/useData';
import PopularToursSummery from '../PopularToursSummery/PopularToursSummery';
import './PopularTours.css';
import Fade from 'react-reveal/Fade';

const PopularTours = () => {
    const [tours] = useData();
    return (
        <div className="popular-tour py-5">
            <div className="container">
                <Fade top>
                    <h2 className="pb-3 text-center" style={{color: '#ff7f47'}}>Most Popular Tours</h2>
                </Fade>
                <Fade left>
                    <div className="popular-tour-container">
                        {   
                            tours?.length === 0 ?
                            <h2 style={{color: '#ff7f47', marginTop: '50px'}}>Loading...</h2>
                            :
                            tours?.slice(0, 6).map(tour => <PopularToursSummery tour={tour} key={tour._id}></PopularToursSummery>)
                        }
                    </div>
                </Fade>
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