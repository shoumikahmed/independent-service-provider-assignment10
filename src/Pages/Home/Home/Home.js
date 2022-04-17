import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='section-container'>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;