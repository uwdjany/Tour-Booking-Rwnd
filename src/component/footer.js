import React from 'react';
import './footer.css'
import log from "../assets/image/logo.jpg"
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
} from  "@ant-design/icons"

import "./footer.css";




const Footer =()=>{
    const date =new Date();
    let year =date.getFullYear();
    return(
        
        <div className='footer-container'>
          <div className='logo-column'>
              <img src={log} alt='' className='logo-img'/>
                  <div className='icons'>
                      <FacebookOutlined/>
                      <TwitterOutlined/>
                      <InstagramOutlined/>
                      
                  </div>
                  <p className='copyright'>
                      {" "}
                      copyright &copy;{year} by Djanati Uwase,
                      <span>Inc.All rights reserved</span>


                  </p>

          </div>





        


          <div className='contactus-column'>
              <h3 className='footer-title'>Contact-Us</h3>
              <p>653 kacyiru St., 2nd floor , <span>Kigali Rwanda</span>

              </p>
              <p>
                  <a href='tel:0784875125'>0784875125</a>
                  </p>
                <p>
                  <a href='email:djanatiuwase@gmail.com'>djanatiuwase@gmail.com</a>
              </p>
             
          </div>

          <div className='acountus-column'>
              <h3 className='footer-title'>Create Account</h3>
              <p><a href='#'>Sign In </a></p>
              <p><a href='#'>Career </a></p>
              <p><a href='#'>Campany </a></p>
          </div>

          <div className='campany-column'>
              <h3 className='footer-title'>campany</h3>
              <p><a href='#'>About Me </a></p>
              <p><a href='#'>Career </a></p>
              <p><a href='#'>Campany </a></p>
          </div>
          <div className='campany-column'>
              <h3 className='footer-title'>Resources</h3>
              <p><a href='#'>About Resources </a></p>
              <p><a href='#'>Career </a></p>
              <p><a href='#'>Campany </a></p>
          </div>

          
        </div>




        





    );
};
export default Footer;