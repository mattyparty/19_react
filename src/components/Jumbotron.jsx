import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbotronheader = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className='display-3'>Employee Directory</h1>
          <p className='lead'>
            This is My Employee Directory, There are Many Like it but this one
            is mine!
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbotronheader;
