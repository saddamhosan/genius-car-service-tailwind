import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useServices from '../Hooks/useServices';


const ServiceDetail = () => {
  const navigate=useNavigate()
  const { id } = useParams();
   const [services] = useServices();
   
   const service = services.find((service) => service.id === +id);
    
  return (
    <div>
      <button onClick={()=>navigate('/')} className="bg-blue-500 text-xl px-8 py-2 rounded-xl mt-6 ml-6">
        Back
      </button>
      <div className="w-1/2 mx-auto mt-12">
        <div>
          <img className="w-full" src={service?.img} alt="" />
        </div>
        <div className="text-center">
          <h1>{service?.name}</h1>
          <h4>{service?.price}</h4>
          <p>{service?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;