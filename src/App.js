import './App.css';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {PersonalArea} from "./pages/PersonalArea";
import {TripPage} from "./pages/TripPage";
import {TripsPage} from "./pages/Trips";
import {AccountPage} from "./pages/AccountPage";
import {ReservationsPage} from "./pages/ReservationsPage";
import {FindTripPage} from "./pages/FindTripPage";
import {ObserveTrip} from "./pages/ObserveTrip";
import {LoginPage} from "./pages/LoginPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {MapPage} from "./pages/MapPage";
import {DialogPage} from "./pages/DialogPage";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path={"/login"} component={LoginPage}/>
            <Route path={"/registration"} component={RegistrationPage}/>
            <Route path={"/personal area"} component={PersonalArea}/>
            <Route path={"/trip"} component={TripPage}/>
            <Route path={"/trips"} component={TripsPage}/>
            <Route path={"/account"} component={AccountPage}/>
            <Route path={"/reservations"} component={ReservationsPage}/>
            {/* клиентская часть */}
            <Route path={"/findTrip"} component={FindTripPage}/>
            <Route path={"/observeTrip"} component={ObserveTrip}/>
            <Route path={"/map"} component={MapPage}/>
            <Route path={"/dialog"} component={DialogPage}/>

          </Switch>


        </div>
      </BrowserRouter>
  );
}

export default App;
