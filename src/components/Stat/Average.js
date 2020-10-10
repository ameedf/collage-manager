import React, { Component } from 'react';
import { connect } from 'react-redux';

class Average extends Component {

  calculateAverage() {
    const students = this.props.students;
    if (!students || students.length === 0) {
      return 0;
    }
    let total = students.map(s => s.grade).reduce((tmp, grade) => tmp + grade);
    return total / students.length;
  }

  render() {
    return (
      <table>
        <thead>
          <tr><th>Average</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.calculateAverage()}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students,
});

export default connect(mapStateToProps)(Average);