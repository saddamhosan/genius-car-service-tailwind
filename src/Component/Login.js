import React, { useState } from "react";
import {
  useAuthState, useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const location=useLocation()
    const from=location?.state?.from?.pathname||'/'

    const [signInWithEmailAndPassword] =
      useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle] =
        useSignInWithGoogle(auth);

        const [signInWithGithub] =
          useSignInWithGithub(auth);

          const [signInWithFacebook] =
            useSignInWithFacebook(auth);

  const [user, loading, error] = useAuthState(auth);

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

    const handleGoogleSignIn=()=>{
     signInWithGoogle();
    }

    const handleGithubSignIn=()=>{
      signInWithGithub()
    }

    const handleFacebookSignIn=()=>{
      signInWithFacebook()
    }

    if(user){
        navigate(from,{replace:true})
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
        First time on the car doctor?
        <Link className="text-orange-600" to="/register">
          Create account
        </Link>
      </p>
      <p className="text-center">Or</p>
      <button
        onClick={handleGoogleSignIn}
        className="border-2 rounded-xl w-full text-xl py-2"
      >
        Login with google
      </button>
      <button
        onClick={handleGithubSignIn}
        className="border-2 rounded-xl w-full text-xl py-2 mt-2"
      >
        Login with gitHub
      </button>
      <button
        onClick={handleFacebookSignIn}
        className="border-2 rounded-xl w-full text-xl py-2 mt-2"
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
