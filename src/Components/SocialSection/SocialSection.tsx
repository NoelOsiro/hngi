import React from 'react'
import { Row } from 'reactstrap'
import Slack from '../../assets/img/slack.png';
import Github from '../../assets/img/github.png';

const SocialSection = () => {
    return (
        <Row className='text-center mb-5'>
            <div>
                <img src={Slack} alt='' width={25} height={25} />
                <img className='ms-4' src={Github} alt='' width={25} height={25} />
            </div>
        </Row>
    )
}

export default SocialSection