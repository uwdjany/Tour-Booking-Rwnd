import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import './contact.css';

import { contactConfig } from './content_option';
const Contact =()=>{
    return(
        <Container>
<Row className="mb-5 mt-3">
    <Col lg='8'>
        <h1 className='display-4 mb-4'>
            Contact Us
        </h1>


    </Col>

</Row>

<Row className='sec_sp'> 
    <Col lg='5' className='mb-5'>
        <h3 className='color_sec py-4'>Get In Touch</h3>
        <address>
            <strong>Email: djanatiuwase@gmail.com</strong>
            <br />
            <strong>Phone: 0784875126</strong>
            
            <br />
            <br />
            <strong>{contactConfig.description}</strong>
        
        </address>
        
       
    </Col>
<Col lg='7' className='d-flex align-items-center'>
    <form className='contact__form w-100'>
        <Row>
            <Col lg='6' className='contact-group'>
<input 
className='form-control'
id='name'
name='name'
placeholder='Name'
type='text'
/>

            </Col>
            <Col lg='6' className='contact-group'>
<input 
className='form-control rounded-0'
id='name'
name='name'
placeholder='Email'
type='email'
/>

            </Col>
        </Row>
        <textarea className='form-control rounded'
        name='message'
        placeholder='Message'
        rows='5'
        > </textarea>
        <br />
        <Row>
            <Col lg='12' className='form-group'>
                <button className='btn ac_btn' type='submit'>Send</button>
            </Col>
        </Row>
    </form>
    </Col>
</Row>
</Container>
    )



















        
    
}
export default Contact;