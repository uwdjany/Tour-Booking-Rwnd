


import React from 'react';
 import logo from "../assets/image/logo.jpg"
 import  './navbar.css';




const Nav=()=>{
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
                </ul>


            </div>
        </div>

        











    )
}
export default Nav;