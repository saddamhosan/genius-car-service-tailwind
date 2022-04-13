import React from "react";
import { useNavigate } from "react-router-dom";


const Service = ({ service  }) => {
  const { price, name, img, description } = service;
  const navigate = useNavigate();
  const handleBookService = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div>
      <div>
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="text-center">
        <h1>{name}</h1>
        <h4>{price}</h4>
        <p>{description}</p>
        <button
          onClick={() => handleBookService(service.id)}
          className="bg-blue-500 text-xl px-8 py-2 rounded-xl mt-2"
        >
          Book This service
        </button>
      </div>
    </div>
  );
};

export default Service;
