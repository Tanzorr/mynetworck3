import React, {Component} from 'react';
import User from "./User";

class UsersContainer extends Component {
    render() {
        return (
            <div>
                <h1>Userc Container</h1>
                <User/>
            </div>
        );
    }
}

export default UsersContainer;