import './App.css';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
// pages
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
import {Provider} from "react-redux";
// redux
import { root_reducer } from "./redux/findTrips/reducers";
import { createStore } from "redux";
// react
import React from "react";


function App() {
  const store = createStore(root_reducer);

  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path={"/login"} component={LoginPage}/>
              <Route path={"/registration"} component={RegistrationPage}/>
              <Route path={"/personalArea"} component={PersonalArea}/>
              <Route path={"/trip"} component={TripPage}/>
              <Route path={"/trips"} component={TripsPage}/>
              <Route path={"/account"} component={AccountPage}/>
              <Route path={"/reservations"} component={ReservationsPage}/>

              {/* клиентская часть */}
              <Route path={"/findTrip"} component={FindTripPage}/>
              <Route path={"/observeTrip"} component={ObserveTrip}/>
              <Route path={"/map"} component={MapPage}/>
              <Route path={"/dialog"} component={DialogPage}/>
              <Route path={"/path"} component={MapPage}/>

            </Switch>


          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
