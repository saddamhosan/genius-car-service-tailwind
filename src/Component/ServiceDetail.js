import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../Hooks/useServices';


const ServiceDetail = () => {
  const { id } = useParams();
   const [services] = useServices();
   console.log(services);



//   const service = services.find((service) => service.id === id);
  return (
    <div>
      <h1>this is service detail: {id}</h1>
    </div>
  );
};

export default ServiceDetail;