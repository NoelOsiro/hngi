import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import ProfileSection from './Components/ProfileSection/ProfileSection';


function App() {
  return (
    <Container > 
      <div className='main-section p-4'>
        <ProfileSection/>
      </div>
    </Container>
  );
}

export default App;
