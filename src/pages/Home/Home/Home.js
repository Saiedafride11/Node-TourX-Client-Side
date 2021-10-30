import React from 'react';
import Banner from '../Banner/Banner';
import News from '../News/News';
import Newsletter from '../Newsletter/Newsletter';
import PopularTours from '../PopularTours/PopularTours';

const Home = () => {
    document.title = 'TourX Home Page';
    return (
        <div>
            <Banner></Banner>
            <PopularTours></PopularTours>
            <News></News>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;