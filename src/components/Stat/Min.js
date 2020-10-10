import React, { Component } from 'react';

class Average extends Component {

  studentsWithMinGrade() {
    const students = this.props.students;
    if (!students || students.length === 0) {
      return ["N/A"];
    }
    let min = Number.MAX_VALUE;
    students.map(s => s.grade).forEach(grade => {
      if (grade < min) {
        min = grade;
      }
    });
    return students.filter(s => s.grade === min).map(s => s.name);
  }

  render() {
    return (
      <table>
        <thead>
          <tr><th>Minimum</th></tr>
        </thead>
        <tbody>
          {this.studentsWithMinGrade().map(name => <tr><td>{name}</td></tr>)}
        </tbody>
      </table>
    );
  }
}

export default Average;