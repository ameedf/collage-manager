import React from 'react';
import './App.css';
import StudentsPage from './components/StudentsPage';
import appStore from './bl/AppStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <StudentsPage />
      </div>
    </Provider>
  );
}

export default App;
