import React, { useState } from 'react'
import { Row } from 'reactstrap';
import './Profile.css';
import profpic from '../../assets/img/profpic.jpg';
import profpichover from '../../assets/img/profpichover.jpg';
import Avatar from './avatar';
const ProfileSection = () => {
  const [isShown, setIsShown] = useState(profpic);
  return (
    <Row>
      <div className='profileImg mb-2'
      onMouseEnter={() => setIsShown(profpichover)}
      onMouseLeave={() => setIsShown(profpic)}>
        <img src={isShown} alt='' id='profile_img'/>
      </div>
      <div className='text-center' >
        <div id='twitter'>Osiroski</div>
      </div>
      <div className='text-center'hidden >
        <div id='slack' hidden >Osiroski</div>
      </div>
      <Avatar/>
    </Row>
  )
}

export default ProfileSection