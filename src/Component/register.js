import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "./../firebase.init";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mistake, setMistake] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, ,loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);
  
  const [user] = useAuthState(auth);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    setMistake("");
    e.preventDefault();
    if (password !== confirmPassword) {
      setMistake("two password not match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    console.log(name)
    updateProfile({ displayName: name });
  };
  useEffect(()=>{
console.log(user);
if (user?.uid) {
  navigate("/");
}
if (user?.uid) {
  updateProfile({ displayName: name });
}
  },[user])
  
  return (
    <div className="w-1/3 mx-auto border-2 my-5 p-10 rounded-xl">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold">Please Register...</h1>
        <div className="my-3">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            onBlur={handleName}
            className="border w-full"
            type="text"
            name="name"
            id=""
          />
        </div>
        <div className="my-3">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            onBlur={handleEmail}
            className="border w-full"
            type="email"
            name="email"
            required
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
            required
          />
        </div>
        <div className="my-3">
          <label className="block" htmlFor="Confirm password">
            Confirm Password
          </label>
          <input
            onBlur={handleConfirmPassword}
            className="border w-full"
            type="password"
            name="confirm password"
            required
          />
        </div>
        <p className="text-red-600">{mistake}</p>
        {loading && <p className="text-blue-600">loading...</p>}
        {error && <p className="text-red-600">{error.message}</p>}
        <div className="flex justify-center">
          <input
            className="bg-blue-600 text-xl font-bold px-5 py-2 text-white rounded-xl mt-2"
            type="submit"
            value="Register"
          />
        </div>
      </form>
      <p>
        Already have an account?
        <Link className="text-orange-600" to="/login">
          Login
        </Link>
      </p>
      <p className="text-center">Or</p>
      <button className="border-2 rounded-xl w-full text-xl py-2">
        Register with google
      </button>
    </div>
  );
};

export default Register;
