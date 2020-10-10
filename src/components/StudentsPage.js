import React, { Component } from 'react';
import { connect } from 'react-redux';
import Statistics from './Stat/Statistics';
import StudentsList from './StudentsList';
import {studentAdded} from '../bl/actionsCreators';

const initialStudentData = {
  name: 'ameed',
  grade: 80,
};

class StudentsPage extends Component {
  state = {
    newStudent: this.copySingleStudent(initialStudentData),
  }

  handleNameChanged(event) {
    const newName = event.target.value;
    const currentData = this.state.newStudent;
    this.setState({
      newStudent: {
        name: newName,
        grade: currentData.grade,
      }
    });
  }

  handleGradeChanged(event) {
    const newGrade = Number(event.target.value);
    const currentData = this.state.newStudent;
    this.setState({
      newStudent: {
        name: currentData.name,
        grade: newGrade,
      }
    });
  }

  addStudent() {
    this.props.handleStudentAdded(this.state.newStudent);
    this.setState({ newStudent: this.copySingleStudent(initialStudentData) });
  }

  copySingleStudent(student) {
    return { ...student };
  }

  render() {
    const students = this.props.students;
    const newStudent = this.state.newStudent;
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <div>
                <h1>New student</h1>
                Name: <input type="text" onChange={(event) => this.handleNameChanged(event)} value={newStudent.name} />
                <br />
                Grade: <input type="number" onChange={(event) => this.handleGradeChanged(event)} value={newStudent.grade} />
                <br />
                <button onClick={() => this.addStudent()}>Add student</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <h1>Students list:</h1>
                <StudentsList />
              </div>
            </td>
            <td>
              <Statistics students={students} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students,
});

const mapDispatchToProps = dispatch => ({
  handleStudentAdded: (s) => dispatch(studentAdded(s))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);