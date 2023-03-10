import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

//라우터 V6 switch 는 Routes로, component는 element로 바뀌었음
//라우터 V5로 변신! npm install react-router-dom@5
// V6삭제 npm uninstall react-router-dom
// v6 예시(exact 삭제)
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <Switch>
//           <Route exact path='/'>
//             <Header />
//             <Home />
//           </Route>

//           <Route path='/checkout'>
//             <Header />
//             <Checkout />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
