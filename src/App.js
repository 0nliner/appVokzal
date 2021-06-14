import './App.css';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {PersonalArea} from "./pages/PersonalArea";
import {TripPage} from "./pages/TripPage";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          {/*<Route path={"/"} component={}/>*/}
          {/*<Route path={"/login_page"} component={}/>*/}
          {/*<Route path={"/register_page"} component={}/>*/}
          <Route path={"/personal area"} component={PersonalArea}/>
          <Route path={"/trip"} component={TripPage}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
