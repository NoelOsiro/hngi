import React from 'react'
import './Link.css';
import { Row } from 'reactstrap'
import { Links } from './Links';
import LinkButton from './LinkButton';

const LinkSection = () => {
  return (
    <Row className='mt-5 p-3'>
      {Links.map((link)=>(
        <LinkButton key={link.text} href={link.href} text={link.text} id={link.text} title={link.title} subtext={link.text}/>
      ))}
    </Row>
  )
}

export default LinkSection