import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage"
import './App.css';


class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" component={SearchPage} exact/>
        <Route path="/saved" component={SavedPage} />
      </div>
    </Router>
    )
  } 
}

export default App;
