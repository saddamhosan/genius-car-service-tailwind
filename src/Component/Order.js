import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
const Order = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate=useNavigate()

    useEffect(()=>{
        const getOrder = async () => {
            const email=user?.email
          const url = `https://agile-shore-59189.herokuapp.com/order?email=${email}`;
          try{
            const { data } = await axios.get(url, {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            setOrder(data);
          }catch(error){
            console.log(error.message);
             if(error.response.status===401||error.response.status===403){
                 signOut(auth)
                navigate('/login')
             }
          }
        };
        getOrder() 
    },[user,navigate])
   
    return (
        <div className='w-1/2 mx-auto mt-10'>
            <h1>your order :{order.length}</h1>
            {
              order.map(oder=><div key={oder._id}>
                <p>{oder.email} : {oder.service}</p>

              </div>)
            }
        </div>
    );
};

export default Order;