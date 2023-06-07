import React, {useState} from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
// const express = require('express');
// const app = express();
// app.use(function(req, res, next) {
//     res.header("Cross-Origin-Embedder-Policy", "require-corp");
//     res.header("Cross-Origin-Opener-Policy", "same-origin");
//     next();
//   });
  
  

export default function Login() {
    const [showLoginButton , setshowLoginButton]=useState(true)
    const [showLogoutButton , setshowLogoutButton]=useState(false)
    const clientId=""
const onLoginSuccess=(res)=>{
    console.log('login succsess', res.profileObj);
    setshowLoginButton(false)
    setshowLogoutButton(true)
}
const onFailureSuccess=(res)=>{
    console.log("login failed", res);
}
const onSignoutSuccess=(res)=>{
    alert("logout succsess");
    setshowLoginButton(true)
    setshowLogoutButton(false)
}


  return (




    <div>

{showLoginButton ? 

      <GoogleLogin
    clientId="137303734976-0t6haclhsrsb1830il8vjajs0kutmqkv.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
  /> :null },

  { showLogoutButton ?
  
  
  <GoogleLogout
      clientId="137303734976-0t6haclhsrsb1830il8vjajs0kutmqkv.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout> : null
  }
    </div>
  )
}
