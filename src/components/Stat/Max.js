import React, { Component } from 'react';
import { connect } from 'react-redux';

class Max extends Component {

  studentsWithMaxGrade() {
    const students = this.props.students;
    if (!students || students.length === 0) {
      return ["N/A"];
    }
    let max = Number.MIN_VALUE;
    students.map(s => s.grade).forEach(grade => {
      if (grade > max) {
        max = grade;
      }
    });
    return students.filter(s => s.grade === max).map(s => s.name);
  }

  render() {
    return (
      <table>
        <thead>
          <tr><th>Max</th></tr>
        </thead>
        <tbody>
          {this.studentsWithMaxGrade().map((name, index) => <tr key={index}><td>{name}</td></tr>)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students,
});

export default connect(mapStateToProps)(Max);