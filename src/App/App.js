import React from 'react';
import SharkTank from '../Components/SharkTank';
import livingStudents from '../Components/LiveStudent';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <SharkTank livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
