import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Experts from './Experts';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - The Car Doctor</title>
            </Helmet>
            <div className='bg-slate-300'>
            <Banner/>
            </div>
            <Services/>
            <Experts/>
        </div>
    );
};

export default Home;