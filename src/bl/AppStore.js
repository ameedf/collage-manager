import { createStore } from 'redux';
import reducer from './StudentsReducer';

const initialState = {
  students: [],
}
const appStore = createStore(
  reducer, 
  initialState);
export default appStore;