import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useServiceDetail from './../Hooks/useServiceDetail';

const Checkout = () => {
    const [user] = useAuthState(auth);
const {id}=useParams()
const [service] = useServiceDetail(id);

const handlePlaceOrder=e=>{
 e.preventDefault()
 const order = {
   name: user?.displayName,
   email: user?.email,
   service: service?.name,
   serviceId:id,
   address:e.target.address.value,
   phone:e.target.phone.value
 };
 axios.post("https://agile-shore-59189.herokuapp.com/order", order).then((res) => {
   const {data}=res
   if(data.insertedId){
       toast('your order id booked')
       e.target.reset()
   }
 });
}
    return (
      <div className="w-1/2 mx-auto my-10 font-serif">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Please Order : {service?.name}
        </h1>
        <form onSubmit={handlePlaceOrder}>
          <input
            className="border my-2 w-full mx-5 pl-2 text-xl py-2 rounded-lg"
            type="text"
            name="name"
            placeholder="Name"
            value={user?.displayName}
            readOnly
            disabled
            required
          />
          <br />
          <input
            className="border my-2 w-full mx-5 pl-2 text-xl py-2 rounded-lg"
            type="email"
            name="email"
            placeholder="Email"
            value={user?.email}
            readOnly
            disabled
            required
          />
          <br />
          <input
            className="border my-2 w-full mx-5 pl-2 text-xl py-2 rounded-lg"
            type="text"
            name="service"
            placeholder="Service"
            value={service.name}
            readOnly
            disabled
            required
          />
          <br />
          <input
            className="border my-2 w-full mx-5 pl-2 text-xl py-2 rounded-lg"
            type="text"
            name="address"
            placeholder="Address"
            autoComplete="off"
            required
          />
          <br />
          <input
            className="border my-2 w-full mx-5 pl-2 text-xl py-2 rounded-lg"
            type="number"
            name="phone"
            placeholder="Phone"
            autoComplete="off"
            required
          />
          <br />
          <input
            className="ml-5 text-xl py-2 bg-blue-500 text-white px-6 my-2 font-bold rounded-xl"
            type="submit"
            value="Place Order"
          />
        </form>
      </div>
    );
};

export default Checkout;