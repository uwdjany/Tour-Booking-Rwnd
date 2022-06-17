


import React from 'react';
 import logo from "../assets/image/logo.jpg"
 import  './navbar.css';

 import { Button, Modal , Checkbox, Form, Input  } from 'antd';

 import { useState } from 'react';


const Nav=()=>{
    const [visible, setVisible] = useState(false);

    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = (e) => {
      console.log(e);
      setVisible(false);
    };
  
    const handleCancel = (e) => {
      console.log(e);
      setVisible(false);
    };
  
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
  
    return(
        
        <div className='navu'>
             <img src={logo} alt='Rwanda booking tour' className='logo-img'/> 
            <div className='navigation-links'>
                <ul className='nav-links'>

                    <li ><a href='home' className='nav-link'style={{color:"white"}}>
                        Home
                        </a></li>
                        
                    <li><a href='aboutus' className='nav-link'style={{color:"white"}}>
                        About-us
                        </a></li>
                        
                    
                        
                   
                        
                    <li><a href='/contact' className='nav-link link-green' style={{color:"white"}}>
                        Contact Us
                        </a></li>
                        
                    <li><a href='/tours' className='nav-link btn-link'style={{color:"white"}}>
                        Tour
                        </a></li>
                       
         









   <Button type="primary" onClick={showModal}>
        SignUp
      </Button> 
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
      >

    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      <Form.Item>
        Or <a href="/register" style={{color:"green",fontSize:"15px"}}>register now!</a>
      </Form.Item>
    </Form>
       
      </Modal>











                </ul>


            </div>
        </div>

        











    )
}
export default Nav;