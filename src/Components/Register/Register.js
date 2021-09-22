import React from "react";
import '../LogIn/login.css';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }


    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }


    onRegisterSubmit = () => {
        fetch('http://localhost:3001/register/', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => { 
            if (user) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
    }


render () {

    return (
            
        <div id="Register" className="modal fade" role="dialog">
        <div className="modal-dialog center">
            <div className="modal-content">
            <div className="modal-body">
                <form>
                    <input 
                    onChange={this.onNameChange}
                    type="text" name="name" 
                    className="name form-control" 
                    placeholder="Name"/>
                    <input 
                    onChange={this.onEmailChange}
                    type="email" name="email" 
                    className="email form-control" 
                    placeholder="E-mail"/>
                    <input 
                    onChange={this.onPasswordChange}
                    type="password" name="password" 
                    className="password form-control" 
                    placeholder="Password"/>
                    <input  onClick={() => this.onRegisterSubmit}
                            className="btn login" type="submit" 
                            value="Register" />   
                </form>
            </div>
            </div>
        </div>  
        </div>
    
        )

}

   
}


export default Register;