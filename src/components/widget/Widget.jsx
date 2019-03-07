import React, {Component} from 'react';
import './Widget.scss';
import Button from '../button/Button';

class Widget extends Component{
  constructor(props){
    super(props);
    this.state = {
      something: 'sdd'
    }
  }

  render(){
    return(
      <div className="widget">
        <div className="widget-header">
          <h2>Products</h2>
        </div>
        <div className="widget-content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$140</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$500</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">2300m More</td>
            </tr>
          </tfoot>
        </table>

        </div>
        <div className="widget-footer">
          <Button label="Go to products" />
          <Button label="Add product" theme="success" />
        </div>
      </div>
    );
  }
}

export default Widget;