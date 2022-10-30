import React from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Footer from './Components/Footer/Footer';
import LinkSection from './Components/LinkSection/LinkSection';
import ProfileSection from './Components/ProfileSection/ProfileSection';
import SocialSection from './Components/SocialSection/SocialSection';


function App() {
  return (
    <Container > 
      <div className='main-section p-4'>
        <ProfileSection/>
        <LinkSection/>
        <SocialSection/>
        <Footer/>
      </div>
    </Container>
  );
}

export default App;
