import React from 'react';
import './footer.css';
import { Container, Row } from 'reactstrap';
import Zuri from '../../assets/img/zuri.png';
import I4g from '../../assets/img/I4G.png';


const Footer = () => {
    return (
        <Row className='footer mt-5'>
            <Container>
                <div className='footer-content'>
                    <div>
                        <img src={Zuri} alt='' />
                    </div>
                    <div className='footer-text'>
                        HNG Internship 9 Frontend Task
                    </div>
                    <div>
                        <img src={I4g} alt='' />
                    </div>
                </div>

            </Container>

        </Row>
    )
}

export default Footer