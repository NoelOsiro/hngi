import React from 'react'
import './Link.css';
import { Row } from 'reactstrap'

const LinkSection = () => {
  return (
    <Row className='mt-5 p-3'>
        <a className='link' href='/'><span>Twitter Link</span></a>
        <a id='btn__zuri' className='link' href='https://training.zuri.team/'><span>Zuri Team</span></a>
        <a id='books' className='link' href=' http://books.zuri.team'><span>Zuri Books</span></a>
        <a id='book_python' className='link' href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>'><span>Python Books</span></a>
        <a id='pitch' className='link' href='https://background.zuri.team'><span>Background Check for Coders</span></a>
        <a id='book_design' className='link' href='https://books.zuri.team/design-rules '><span>Design Books</span></a>
    </Row>
  )
}

export default LinkSection