import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Spinners from './Spinners';

const RequireAuth =({children}) => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
    const location=useLocation()
     const [user, loading] = useAuthState(auth);
     console.log(user)
     if (loading || sending) {
       return <Spinners />;
     }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace/>
    }

    if(user.providerData[0]?.providerId==='password'&&!user.emailVerified){
      return <div>
        <h1>Your email is not verified</h1>
        <h1>Please verified your email address</h1>
        <button
        onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
        }}
      >
       Send Verification email
      </button>
      </div>
    }

    return children;
};

export default RequireAuth;