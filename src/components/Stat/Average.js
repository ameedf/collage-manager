import React, { Component } from 'react';

class Average extends Component {

  calculateAverage() {
    const students = this.props.students;
    if (!students || students.length === 0) {
      return 0;
    }
    console.log(students);
    let total = students.map(s => s.grade).reduce((tmp, grade) => tmp + grade);
    console.log(total);
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

export default Average;