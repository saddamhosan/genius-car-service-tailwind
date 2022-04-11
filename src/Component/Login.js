import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    } 

    if(user){
        navigate('/')
    }

  return (
    <div className="w-1/3 mx-auto border-2 my-5 p-10 rounded-xl">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">Please Login...</h1>
        <div className="my-3">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            onBlur={handleEmail}
            className="border w-full"
            type="email"
            name="email"
            id=""
          />
        </div>
        <div className="my-3">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            onBlur={handlePassword}
            className="border w-full"
            type="password"
            name="password"
            id=""
          />
        </div>
        {loading && <p className="text-blue-600">loading...</p>}
        {error && <p className="text-red-600">{error.message}</p>}
        <div className="flex justify-center">
          <input
            className="bg-blue-600 text-xl font-bold px-5 py-2 text-white rounded-xl mt-2"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <p>
        First time on the car doctor?{" "}
        <Link className="text-orange-600" to="/register">
          Create account
        </Link>
      </p>
      <p className="text-center">Or</p>
      <button className="border-2 rounded-xl w-full text-xl py-2">
        Login with google
      </button>
    </div>
  );
};

export default Login;
