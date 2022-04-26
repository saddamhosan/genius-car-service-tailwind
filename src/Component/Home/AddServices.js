import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{
        console.log(data);
        const url = "https://agile-shore-59189.herokuapp.com/services";
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(result=>{
            console.log(result);
           
        })
    };
    return (
      <form className="w-1/2 mx-auto mt-20" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl text-center font-serif font-bold text-blue-500">
          Please add services
        </h1>
        <input
          placeholder="Name"
          className="pl-2 border-2 block my-3 w-10/12 text-2xl rounded-xl"
          {...register("name")}
        />
        <input
          placeholder="Image"
          className="pl-2 border-2 block my-3 w-10/12 text-2xl rounded-xl"
          {...register("img")}
        />
        <textarea
          placeholder="Description"
          className="pl-2 border-2 block my-3 w-10/12 text-2xl rounded-xl"
          {...register("description", { required: true, maxLength: 200 })}
        />
        <input
        placeholder='Price'
          className="pl-2 border-2 block my-3 w-10/12 text-2xl rounded-xl"
          type="number"
          {...register("price")}
        />
        <input
          className="border-2 block my-3 w-10/12 text-2xl rounded-xl bg-blue-500 text-white font-semibold"
          type="submit"
        />
      </form>
    );
};

export default AddServices;