import React from 'react'
import { Row } from 'reactstrap';
import './Profile.css';
import profpic from '../../assets/img/profpic.jpg';
import Avatar from './avatar';
const ProfileSection = () => {
  return (
    <Row>
      <div className='profileImg mb-2'>
        <img src={profpic} alt='' id='profile_img' />
      </div>
      <div className='text-center' >
        <div id='twitter'>Osiroski</div>
      </div>
      <div className='text-center' hidden >
        <div id='slack'>Osiroski</div>
      </div>
      <Avatar/>
    </Row>
  )
}

export default ProfileSection