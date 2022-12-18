import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className='login'>
      <Link path='/'>
        <img
          className='login_logo'
          src='http://drive.google.com/uc?export=view&id=17CSQr4MHyFUxCI2uqg7x4PN4-an51Ijw'
          alt=''
        />
      </Link>
    </div>
  );
}

export default Login;
