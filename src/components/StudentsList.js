import React, { Component } from 'react';
import SingleStudent from './SingleStudent';

class StudentsList extends Component {

  render() {
    const students = this.props.students;
    if (students.length === 0) {
      return <h2>No students added yet !</h2>
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map((s, index) =>
            <SingleStudent student={s} handleRemove={() => this.props.handleRemove(index)} />
          )}
        </tbody>
      </table>
    );
  }
}

export default StudentsList;