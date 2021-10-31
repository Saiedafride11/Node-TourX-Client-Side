import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/useData';
import ToursSummery from '../ToursSummery/ToursSummery';
import './Tours.css';
import Fade from 'react-reveal/Fade';


const Tours = () => {
    const [tours] = useData();
    document.title = 'Tourist Place';
    return (
        <div className="tour py-5">
            <div className="container">
                <Fade top>
                    <h2 className="pb-3 text-center" style={{color: '#ff7f47'}}>Total Tourist Place Available: <strong style={{color: '#2c3e50'}}>{tours.length}</strong></h2>
                </Fade>
                <Fade left>
                    <div className="tours-container">
                        {   
                            tours?.length === 0 ?
                            <h2 style={{ color: '#ff7f47', marginTop: '50px'}}>Loading...</h2>
                            :
                            tours?.map(tour => <ToursSummery tour={tour} key={tour._id}></ToursSummery>)
                        }
                    </div>
                </Fade>
                <div className="text-center mt-3">
                    <Link to="/home">
                        <button className="btn w-25 text-white"  style={{backgroundColor: '#ff7f47'}}>Back Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tours;