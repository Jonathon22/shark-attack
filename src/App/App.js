import React from 'react';
import studentData from '../Helpers/Data/studentData';
import SharkTank from '../Components/SharkTank';
import Graveyard from '../Components/Graveyard';
import '../styles/App.scss';

class App extends React.Component {
  state = {
    livingKids: studentData.livingStudents(),
    deadKids: studentData.dearlyBeloved(),
  }

  theCorral = () => {
    this.setState({
      livingKids: studentData.livingStudents(),
      deadKids: studentData.dearlyBeloved(),
    });
  }

  AttackStudents = () => {
    if (this.state.livingKids.length) {
      const randomKid = this.state.livingKids[
        Math.floor(Math.random() * Math.floor(this.state.livingKids.length))].id;
      studentData.followTheLight(randomKid);
    }
    this.theCorral();
  }

  render() {
    const { livingKids, deadKids } = this.state;
    return (
      <div>
        <button className='d-flex flex-wrap' onClick={this.AttackStudents}> Shark Attack</button>
        <SharkTank livingStudents={livingKids} />
        <Graveyard dearlyBeloved={deadKids}/>
      </div>
    );
  }
}

export default App;
