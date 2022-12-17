import React from "react";
import "./Header.css";
//search icon 불러오기
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";

function Header() {
  return (
    <div className='header'>
      <img
        className='Header_logo'
        src='http://drive.google.com/uc?export=view&id=19dTjrsZx_Z4gFhpXLDZygzTmD-XDZ6zE'
        alt='로고영역'
      />
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        {/* 서치아이콘(돋보기입력) */}
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'> 안녕하세요!</span>
          <span className='header_optionLineTwo'> login하기!</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'> 돌아가기</span>
          <span className='header_optionLineTwo'> 주문내용</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'> 반가워요</span>
          <span className='header_optionLineTwo'> 구독과좋아요</span>
        </div>

        <div className='header_optionBasket'>
          <ShoppingBasket />
          <span className='header_optionLineTwoheader_basketCount'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
