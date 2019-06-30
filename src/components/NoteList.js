import React from 'react';
import axios from 'axios';

class NoteList extends React.Component {

    //props come from a parent class (a component that uses this component)
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios.get("/api/notes").then(response => {
            const notes = response.data;
            console.log(notes);

            this.setState({notes: notes});
        });
    }
    render() {
        return (
            <div>
                <h2>Notes:</h2>
                <ul>
                    {this.state.notes.map(x => <li>{x}</li>)}
                </ul>
            </div>
        )
    }
}

export default NoteList;