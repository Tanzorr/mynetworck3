import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import s from "./Asade.module.css";

class Asade extends Component {
    render() {
        return (
            <div className="asade">
               <nav>
                   <ul>
                       <li><NavLink to="/dialigs">Dialogs</NavLink></li>
                       <li><NavLink to="/profile">Profile</NavLink></li>
                       <li><NavLink to="/users">Users</NavLink></li>
                       <li><NavLink to="/todolist">TodoList</NavLink></li>

                   </ul>
               </nav>
            </div>
        );
    }
}

export default Asade;