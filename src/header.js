import React from "react";
import "./Header.css";
//search icon 불러오기
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='Header_logo'
          src='http://drive.google.com/uc?export=view&id=1ukI1IVH_-9wL1THXvzeNQ3gH0ZBgNzhD'
          alt='로고영역'
        />
      </Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        {/* 서치아이콘(돋보기입력) */}
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'> 안녕하세요!</span>
          <Link to={!user && "/login"} className='homelogin'>
            <span
              onClick={handleAuthentication}
              className='header_optionLineTwo'
            >
              {" "}
              {user ? "로그아웃" : "로그인"}{" "}
            </span>
          </Link>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'> 돌아가기</span>
          <span className='header_optionLineTwo'> 주문내용</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'> 반가워요</span>
          <span className='header_optionLineTwo'> 구독과좋아요</span>
        </div>
        <Link to='/checkout'>
          <div className='header_optionBasket'>
            <ShoppingBasket />
            <span className='header_optionLineTwoheader_basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
