import * as actions from './actionTypes';

export function studentAdded(newStudent) {
  return {
    type: actions.STUDENT_ADDED,
    payload: newStudent,
  }
}

export function studentRemoved(studentIndex) {
  return {
    type: actions.STUDENT_REMOVED,
    payload: studentIndex,
  }
}