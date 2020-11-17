import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import HomeDetails from './components/HomeDetails/HomeDetails/HomeDetails';
import BookingList from './components/Dashboard/BookingDashboard/BookingList/BookingList';
import AddRent from './components/Dashboard/AddRentDashboard/AddRent/AddRent';
import MyRent from './components/Dashboard/MyRentDashboard/MyRent/MyRent';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <PrivateRoute path="/Dashboard">
            <AddRent></AddRent>
          </PrivateRoute>
          <PrivateRoute path="/homeDetails/:houseId" >
            <HomeDetails></HomeDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/bookingList" >
            <BookingList></BookingList>
          </Route>
          <Route path="/addRent" >
            <AddRent></AddRent>
          </Route>
          <Route path="/myRent" >
            <MyRent></MyRent>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
