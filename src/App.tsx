import React from 'react';
import { Container,Row, } from 'reactstrap';
import './App.css';
import profpic from './assets/img/profpic.jpg';

function App() {
  return (
    <Container > 
      <div className='main-section p-4'>
        <Row>
          <div className='profileImg '>
            <img src={profpic} alt='' id='profile_img'/>
          </div>
          <div id='twitter'>
            Osiroski
          </div>
        </Row>

      </div>
    </Container>
  );
}

export default App;
