import React from 'react'
import { Row } from 'reactstrap';
import './Profile.css';
import profpic from '../../assets/img/profpic.jpg';
import { ReactComponent as IconMenu } from '../../assets/img/share.svg';
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
      <div className='avatar_share'>
        <div className='share_06'>
          <IconMenu id='shareButton' />
        </div>
      </div>
    </Row>
  )
}

export default ProfileSection