import React, {Component} from 'react';
import s from "./Asade.module.css";

class Asade extends Component {
    render() {
        return (
            <div className="asade">
               <nav>
                   <ul>
                       <li><a href="">Profile</a></li>
                       <li><a href="">Dialogs</a></li>
                       <li><a href="">Users</a></li>
                       <li><a href="">TodoList</a></li>
                   </ul>
               </nav>
            </div>
        );
    }
}

export default Asade;