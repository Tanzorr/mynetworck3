import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Asade from "./components/asade/Asade";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Dialogs from "./components/content/dialigs/DialogContainer"
import Profile from "./components/content/profile/ProfileContainer"
import Users from "./components/content/users/UsersContainer"
import TodoLists from "./components/content/todolists/TodoListContainer"



function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Header/>
      <div className="container">
            <div className="row">
              <Asade/>
              {/*<Content/>*/}
              <div className="content">

                  <Route path='/dialigs' component={Dialogs}/>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/users' component={Users}/>
                  <Route path='/todolist' component={TodoLists}/>


                  </div>
            </div>
          </div>
      <Footer/>
    </div>
      </BrowserRouter>
  );
}

export default App;
