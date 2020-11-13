import React, { Component } from 'react';

class Gravestone extends Component {
  render() {
    const { student } = this.props;
    return (<div className="card gravestone">
        <div className="card-body">
          <h4 className="card-text">{student.firstName} {student.lastName} is Dead</h4>
          <i className="fas fa-skull-crossbones"></i>
        </div>
      </div>);
  }
}

export default Gravestone;
