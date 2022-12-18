import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((error) => alert(error.message()));
  };
  return (
    <div className='login'>
      <Link path='/'>
        <img
          className='login_logo'
          src='http://drive.google.com/uc?export=view&id=17CSQr4MHyFUxCI2uqg7x4PN4-an51Ijw'
          alt=''
        />
      </Link>

      <div className='login_container'>
        <h1>로그인</h1>
        <form>
          <h5> 이메일 </h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
          />
          <h5> 비밀번호 </h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
          <button onClick={signIn} className='login_signInButton'>
            {" "}
            로그인하기
          </button>
        </form>
        <p> 이용약관 동의하십니까?</p>
        <button onClick={register} className='login_registerButton'>
          {" "}
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
