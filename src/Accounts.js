import React from "react";
import "./Home.css";

export default function UserAccounts(){
     const [users, setUsers] = React.useState([])
      React.useEffect(() => {
        fetch(
            'https://panorbit.in/api/users.json',
            // {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     } 
            // }
        )
        .then((response) =>  response.json())
        .then((data) => {setUsers(data.users)});
      },[]) 
      const renderUsers = () => {
        return users.map((user, index) => {
            return <div key={index} className="user-wrapper">
                 <img  className="circular-square" src={user.profilepicture} 
             alt="User profile "/>{user.name}</div>
        })
    } 
    return (
       
        <div className="contentDiv">
           <h3> Select an Account</h3>
           {renderUsers()}
        </div>
    )
}