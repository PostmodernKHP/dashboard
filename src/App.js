import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';

class App extends Component {



// loads the different priority information
  handleNavBarClick = (priority) => {

      this.setState({ priorityList: newUsername });

  };

  render() {
    return (
      <div className="App">
          <NavBar />


      </div>
    );
  }
}

export default App;


