import React from 'react';
import "./App.css";
import Header from "./components/header/Header";
import Asade from "./components/asade/Asade";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
            <div className="row">
              <Asade/>
              <Content/>
            </div>
          </div>
      <Footer/>
    </div>
  );
}

export default App;
