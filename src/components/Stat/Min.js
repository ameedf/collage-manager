import React, { Component } from 'react';
import { connect } from 'react-redux';

class Min extends Component {

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
          {this.studentsWithMinGrade().map((name, index) => <tr key={index}><td>{name}</td></tr>)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students,
});

export default connect(mapStateToProps)(Min);