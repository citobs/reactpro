import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //리액트V5에서는 const history = useHistory(); 였으나
  //리액트 v6에서는 useHistory();삭제 , useNavigate로 대체
  //v5코드예시

  // const history = useHistory();

  // history.push('/');
  // history.goback();
  // history.go(-2);
  // history.push(`/user/${user._id}`);

  //V6변경코드
  // const navigate = useNavigate();
  // navigate('/');
  // navigate(-1);
  // navigate(-2);
  // navigate(`/user/${user._id}`);

  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => alert(error.message()));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          //코드변경 기존코드는 history.push('/')
          //리액트 라우터V6에서는 하단과같이 변경
          history("/");
        }
      })
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
