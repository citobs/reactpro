import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

//라우터 V6 switch 는 Routes로, component는 element로 바뀌었음
//라우터 V5로 변신! npm install react-router-dom@5
// V6삭제 npm uninstall react-router-dom
//v6 예시(exact 삭제)
// function App() {
//   return (
//     <Router>
//       <div className='App'>
//         <Routes>
//           <Route path='/' element={<Header />} />
//           <Route path='/' element={<Home />} />

//           <Route path='/checkout' element={<Header />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
