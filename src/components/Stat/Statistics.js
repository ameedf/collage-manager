import React, { Component } from 'react';
import Average from './Average';
import Min from './Min';
import Max from './Max';

class Statistics extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td><Average students={this.props.students} /></td>
            <td><Min students={this.props.students} /></td>
            <td><Max students={this.props.students} /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Statistics;