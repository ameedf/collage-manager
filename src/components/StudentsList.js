import React, { Component } from 'react';
import SingleStudent from './SingleStudent';
import {connect} from 'react-redux';


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
          {this.props.students.map((_, index) =>
            <SingleStudent key={index} index={index} />
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  students: state.students,
});

export default connect(mapStateToProps, null)(StudentsList);