import React from "react";
import './login.css';

const LogIn = ({onRouteChange}) => {

    return (
            
    <div id="login" className="modal fade" role="dialog">
    <div className="modal-dialog center">
        <div className="modal-content">
        <div className="modal-body">
            <form>
                <input type="text" name="username" className="username form-control" placeholder="Username"/>
                <input type="password" name="password" className="password form-control" placeholder="Password"/>
                <input  onClick={() => onRouteChange('home')}
                        className="btn login" 
                        type="submit" 
                        value="Login" />
                <input  onClick={() => onRouteChange('register')}
                        className="btn login" style={{color: 'red'}}
                        type="submit" 
                        value="Register" />

            </form>
        </div>
        </div>
    </div>  
    </div>




    )
}


export default LogIn;