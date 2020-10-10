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
            <td><Average /></td>
            <td><Min /></td>
            <td><Max /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Statistics;