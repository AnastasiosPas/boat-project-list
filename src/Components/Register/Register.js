import React from "react";
import '../LogIn/login.css';


const Register = ({onRouteChange}) => {


    return (
            

    <div id="Register" className="modal fade" role="dialog">
    <div className="modal-dialog center">
        <div className="modal-content">
        <div className="modal-body">
            <form>
                <input type="text" name="nickname" className="nickname form-control" placeholder="Nickname"/>
                <input type="text" name="username" className="username form-control" placeholder="Username"/>
                <input type="password" name="password" className="password form-control" placeholder="Password"/>
                <input  onClick={() => onRouteChange('home')}
                        className="btn login" type="submit" 
                        value="Register" />

            </form>
        </div>
        </div>
    </div>  
    </div>




    )
}


export default Register;