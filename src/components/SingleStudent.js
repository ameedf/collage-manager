import React, { Component } from 'react';

class SingleStudent extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.grade}</td>
        <td><button onClick={(i) => this.props.handleRemove(i)}>Remove</button></td>
      </tr>
    );
  }
}

export default SingleStudent;