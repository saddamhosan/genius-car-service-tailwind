import React from "react";

const Service = ({ service }) => {
  const { price, name, img, description } = service;
  return (
    <div>
      <div>
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="text-center">
        <h1>{name}</h1>
        <h4>${price}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
