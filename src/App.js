import React, { Component } from 'react';
import ButtonFlow from './components/buttonFlow/ButtonFlow';
import Widget from './components/widget/Widget';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This app is a button, enjoy!</h1>
        <ButtonFlow theme='primary' label="here be my button"  shadow={true} />
        <hr />
        <Widget />
      </div>
    );
  }
}

export default App;
