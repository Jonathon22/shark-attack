import { Component } from 'react';
import studentData from '../../Helpers/Data/studentData';
import LivingStudent from '../LiveStudent';

class SharkTank extends Component {
  state = {
    students: studentData.students,
  };

  render() {
    const { students } = this.state;
    console.warn(students);
    const renderLivingStudentsToDom = () => students.map((student) => <LivingStudent students={student}/>);
    return <div>
      {renderLivingStudentsToDom()}
      </div>;
  }
}

export default SharkTank;
