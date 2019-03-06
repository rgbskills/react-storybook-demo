import React, { Component } from 'react';
import ButtonFlow from './components/buttonFlow/ButtonFlow';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>This app is a button, enjoy!</h2>
        <ButtonFlow theme='primary' label="here be my button"  shadow={true} />
      </div>
    );
  }
}

export default App;
