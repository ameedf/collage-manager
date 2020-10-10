import React, { Component } from 'react';
import Statistics from './Stat/Statistics';
import StudentsList from './StudentsList';

const initialStudentData = {
  name: 'ameed',
  grade: 80,
};

class StudentsPage extends Component {
  state = {
    newStudent: this.copySingleStudent(initialStudentData),
    students: [],
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
    const students = this.copyStudents();
    students.push(this.copySingleStudent(this.state.newStudent));
    this.setState({ students, newStudent: this.copySingleStudent(initialStudentData) });
  }

  copyStudents() {
    return this.state.students.map(s => (this.copySingleStudent(s)));
  }

  copySingleStudent(student) {
    return { ...student };
  }

  handleRemove(index) {
    let students = this.copyStudents();
    students = this.state.students.splice(index, 1);
    this.setState(students);
  }

  render() {
    const students = this.state.students;
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
                <StudentsList students={students} handleRemove={(index) => this.handleRemove(index)} />
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

export default StudentsPage;