import React, { Component } from 'react';
import GraveStone from '../GraveStone';

class Graveyard extends Component {
  render() {
    const renderDead = () => this.props.dearlyBeloved.map((student) => <GraveStone key={student.id} student={student} />);
    return (
      <>
    <h1>GraveYard </h1>
    <div className="d-flex flex-wrap m-5">
      { renderDead() }
      </div>
    </>);
  }
}

export default Graveyard;
