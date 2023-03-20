import React from "react"
import { Route, Switch } from "react-router-dom"
import {  useRouteMatch } from "react-router-dom"
import './App.css';
import HomePage from "./HomePage";
// import NavigationPage from "./navigation-page";
import UserAccounts from "./Accounts";
import Profile from "./profile";

export default function App() {
  const match = useRouteMatch();
  console.log(match);
  return (
    <>
    
     <Switch>
      <Route exact path="/profile" component={Profile}/>
      <Route  path="/" component={HomePage} />
      <Route  path="/users" component= {UserAccounts} />
     </Switch>
     </>
  );
}
