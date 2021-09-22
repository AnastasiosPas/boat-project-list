import React from "react";
import '../LogIn/login.css';

const LogOut = ({onRouteChange}) => {

    return (
    <div>
        <p  onClick={() => onRouteChange('home')}
               className="btn login">Log Out</p>

    </div>

    )
}

export default LogOut;
