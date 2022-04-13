import React from 'react';
import useServices from '.././../Hooks/useServices';
import Service from './Service';

const Services = () => {
    
    const [services]=useServices()
     console.log(services);
    return (
        <div>
            <h1 className='text-center text-blue-600 text-3xl font-bold mb-5 mt-20'>Our services</h1>
            <div className='grid md:grid-cols-3 gap-4 m-4'>

            {services.map(service=><Service key={service.id} service={service}/>)}
            </div>
        </div>
    );
};

export default Services;