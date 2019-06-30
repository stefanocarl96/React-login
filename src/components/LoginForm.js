import React from 'react';
import NoteList from './NoteList'
import axios from 'axios';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: "",
                password: ""
            }
        }
    }

    updateField(event, property) {
        console.log("input changed");

        const value = event.target.value;

        this.setState((currentState) => {
            currentState.user[property] = value;
            return currentState;
        });


    }

    login() {
        console.log("inside login");
        console.log(this.state.user.email);
        console.log(this.state.user.password);
        this.props.onLogin(this.state.user);

        const promise = axios.post("/api/user/login", this.state.user);

        promise.then(response => {
            //console.log(response.data);
            this.state.user = response.data;

            if (this.state.user == null) {
                console.log("Unauthorised");
            } else {
                console.log("Correct credentials");
            }
        });
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>

                <div>
                    Email: <input className={"email"} onChange={(event) => this.updateField(event, "email")} type="text"/>
                </div>
                <div id={"main"}>
                    Password: <input onChange={(event) => this.updateField(event, "password")} type="password"/>
                </div>
                <div>
                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginForm;