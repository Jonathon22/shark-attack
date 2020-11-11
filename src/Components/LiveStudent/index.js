import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

class LivingStudent extends Component {
  render() {
    const { students } = this.props;

    return (
      <div>
      <Card className={students.id}>
        <CardImg top width="20%" src={students.imgUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{students.firstName} {students.lastName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{students.isDead}</CardText>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default LivingStudent;
