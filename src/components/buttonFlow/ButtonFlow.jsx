import React, {Component} from 'react';
import Button from '../button/Button';


class ButtonFlow extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonState: 'normal'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  random(){
    const items = ['success', 'error'];
    var item = items[Math.floor(Math.random()*items.length)];
    this.setState({buttonState: item});
    setTimeout(
      function() {
        this.setState({buttonState: "normal"});
      }
      .bind(this),
      3000
   );
  }

  handleClick(){
    this.setState({buttonState: "loading"});
    setTimeout(
      function() {
        this.random();
      }
      .bind(this),
      3000
   );
  }

  render() {
    return (
      <Button onClick={ this.handleClick } status={this.state.buttonState} label={this.props.label} shadow={this.props.shadow} theme={this.props.theme} />
    );
  }
}

export default ButtonFlow;