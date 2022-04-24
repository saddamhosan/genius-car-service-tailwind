import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Order = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        const getOrder=async()=>{
            const url = `http://localhost:5000/order`;
            const {data}=await axios.get(url)
            setOrders(data)

        }
        getOrder()
    },[])
    return (
        <div>
            <h1>your order :{orders.length}</h1>
        </div>
    );
};

export default Order;