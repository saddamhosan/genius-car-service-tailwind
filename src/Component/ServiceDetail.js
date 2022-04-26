import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServiceDetail from './../Hooks/useServiceDetail';

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [service]=useServiceDetail(id)

  const handleDeleteServices = (id) => {
    const proceed = window.confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`https://agile-shore-59189.herokuapp.com/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete successful");
            navigate("/");
          }
        });
    }
  };
  return (
    <div>
      <div className="flex justify-between mx-10 mt-6">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-xl px-8 py-2 rounded-xl "
        >
          Back
        </button>

        <button
          onClick={() => handleDeleteServices(service._id)}
          className="bg-red-500 text-xl px-8 py-2 rounded-xl "
        >
          Delate
        </button>
      </div>
      <div className="w-1/2 mx-auto mt-12">
        <div>
          <img className="w-full" src={service?.img} alt="" />
        </div>
        <div className="text-center">
          <h1>{service?.name}</h1>
          <h4>{service?.price}</h4>
          <p>{service?.description}</p>
          <button onClick={()=>navigate(`/checkout/${id}`)} className="bg-blue-600 text-white text-xl px-6 py-3 mt-4 rounded-xl">Proceed Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
