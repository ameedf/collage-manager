import * as actions from './actionTypes';

export default function reducer(state = { students: [] }, action) {
  switch (action.type) {
    case actions.STUDENT_ADDED:
      state = copyState(state);
      state.students.push(copyStudent(action.payload));
      return state;
    case actions.STUDENT_REMOVED:
      state = copyState(state);
      state.students = state.students.filter((s, index) => index !== action.payload);
      return state;
    default:
      return state;
  }
}

function copyState(oldState) {
  return { ...oldState, students: copyStudents(oldState.students) };
}

function copyStudents(oldStudents) {
  return oldStudents.map(s => copyStudent(s));
}

function copyStudent(student) {
  return { ...student };
}