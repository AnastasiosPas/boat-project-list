import React from "react";
import './login.css';

class LogIn extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitLogIn = () => {
        fetch('http://localhost:3000/login/', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
      .then(user => {
        if(user.id){ // does the user exist? Did we receive a user with a property of id?
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            
            <div id="login" className="modal fade" role="dialog">
            <div className="modal-dialog center">
                <div className="modal-content">
                <div className="modal-body">
                    <form>
                        <input  onChange={this.onEmailChange}
                                type="email" name="email" 
                                className="email form-control" 
                                placeholder="E-mail" required
                                />
                        <input  onChange={this.onPasswordChange}
                                type="password" name="password" 
                                className="password form-control" 
                                placeholder="Password"/>
                        <input  onClick={this.onSubmitLogIn}
                                className="btn login" 
                                type="submit" 
                                value="Login" />
                        <input  onClick={()=>onRouteChange('register')}
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
   
}


export default LogIn;