import React from "react";
import { Route, Switch } from "react-router-dom"
import "./Home.css";
import UserAccounts from "./Accounts";
import NavigationPage from "./navigation-page";



export default function HomePage() {

  return (
    <>
    <div className="homeWrapperBody ">
    
      <UserAccounts/> 
    {/* <NavigationPage/> */}
    </div>
    <Switch>
      <Route exact path="/profile" component={NavigationPage}/>
     </Switch>
    </>
  );
}


