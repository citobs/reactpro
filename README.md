# Read me 삭제

01:40 리드미업!

02:58 header 제작중

12/17 07:49 헤더 css일부 및 header 완성(아마존 클론코딩)

12/17 08:13 헤더 전체완성(css포함)

12/17 20:35 본문(home.js) 작성 시작

12/17 20:19 본문(home.js) 작성 완료

12/18 12:53 본문최종완성(구현완료)/ 라우팅 설정시작

12/18 01:58 라우팅 관련 추가사항(v5, v6)

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

//라우터 V6 switch 는 Routes로, component는 element로 바뀌었음
//라우터 V5로 변신! npm install react-router-dom@5
// V6삭제 npm uninstall react-router-dom
//v6 예시(exact 삭제)

V6 사용법 익히기

12/18 20:05 리액트 링크 일부완성

12/18 20:20 리액트 react-currency-format 설치안되는 거해결

- 명령어 추가 : npm install react-currency-format --save --force

12/18 21:53 일부 리듀스 완성(redux 사용일보직전)

12/18 23:58 reducer 오류수정

12/19 12:34 2차 리듀서 수정

12/19 01:04 장바구니 담기 기능완성 / 아이템리스트출력추가

12/19 01:24 장바구니 리스트출력기능 완성 /제거기능추가시작

12/19 01:43 장바구니 제거기능 완성 / 타기능 추가 시작

12/19 findindex 사용법:

- array가 5,12,8,130,44 의 순서로 주어졌을때 9보다 큰곳의위치를 알고 싶어?
- 3개가 존재, 맨처음 조건을 만족하는 곳의 인덱스를 반환
- const OverNine = (e) => e > 9;
- array.findIndex(OverNine) : 0,1,2,3,4 순서에서 1이 우선!
- 사용예시는 : reduce.js에 있음

12/19 02:14 로그인기능추가시작
