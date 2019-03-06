import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
    <button onClick={this.props.onClick} 
            className={`btn btn-${this.props.theme} ${this.props.shadow ? 'btn-shadow':''} btn-status-${this.props.status}`}>
            { this.props.label }
    </button>);
  }
}

Button.defaultProps = {
  label: 'No text passed!',
  theme: 'primary',
  status: 'normal',
  shadow: false
};

Button.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.string,
  status: PropTypes.string,
  shadow: PropTypes.bool 
};

export default Button;

