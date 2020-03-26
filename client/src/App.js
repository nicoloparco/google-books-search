import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css';
import Jumbotron from './components/Jumbotron';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
      </div>
    </Router>
    )
  } 
}

export default App;
