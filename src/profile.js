 import React from "react";
 import "./navi-page.css";
import NavigationPage from "./navigation-page";

 export default function Profile(){
    return(
        <div className="profile-page-container">
         <NavigationPage/>
            <div className="profile-page-content">
                <div className="header">
                    <h3>Profile</h3>
                    <p>Leanne Grahamm</p>
                </div>
                <div className="user-details">
                    <img className="circular-square" src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"  alt="User Profile"/>
                    <h3>Leanne Grahamm</h3>
                    <div>UserName: Bret</div>
                    <div>e-mail: Sincere@april.biz</div>
                    <div>Phone: 999999999</div>
                    <div>website: hildegard.org</div>
                </div>
            </div>
        </div>
    )
 }