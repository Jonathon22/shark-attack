import React, { Component } from 'react';
import {
  Card, CardBody, CardImg,
  CardTitle,
} from 'reactstrap';
import studentShape from '../../Helpers/Propz/studentShape';

class LivingStudent extends Component {
 static propTypes = {
   students: studentShape,
 }

 render() {
   const { students } = this.props;

   return (
      <div className='container col-2'>
      <Card className='LivingStudentCard'>
        <CardImg className='cardImg' top width="20%" src={students.imgUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{students.firstName} {students.lastName}</CardTitle>
          </CardBody>
      </Card>
    </div>
   );
 }
}

export default LivingStudent;
