import React from 'react';
import NoteList from './NoteList'
import LoginForm from './LoginForm'

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null
        }

    }

    login(user) {
        console.log(user);
        this.setState({user})
    }

    render() {
        return (
            <div>
                <h1>Notes App</h1>

                {this.state.user == null ? <LoginForm title="Login to see your notes" onLogin={user => this.login(user)}/> : <NoteList/>}

            </div>
        )
    }
}

export default Main;