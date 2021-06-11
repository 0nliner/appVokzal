import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {PersonalArea} from "./pages/PersonalArea";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          {/*<Route path={"/"} component={}/>*/}
          {/*<Route path={"/login_page"} component={}/>*/}
          {/*<Route path={"/register_page"} component={}/>*/}
          <Route path={"/personal area"} component={PersonalArea}/>

        </div>
      </BrowserRouter>
  );
}

export default App;
