import React, {Component} from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

class App extends Component{
  render() {
    return(
      <div className="App">
          <HelloWorld name = {"[YOUR NAME]"}/>
      </div>
    );
  }

}

export default App;