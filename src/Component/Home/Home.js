import React from 'react';
import Banner from './Banner';
import Experts from './Experts';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <div className='bg-slate-300'>
            <Banner/>
            </div>
            <Services/>
            <Experts/>
        </div>
    );
};

export default Home;