import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import AboutUs from '../views/About';
import HomeLayout from '../component/HomeLayout';
import Tours from '../views/Tours';
import Contact from '../views/Contact';

const Index=()=>{
   
   return(
    <HomeLayout>
<Routes>
    <Route exact path='/' element= {<Home/>}></Route>
    <Route exact path='/home' element= {<Home/>}></Route>
     <Route exact path='/aboutus' element= {<AboutUs/>}></Route>
     <Route  path='/tours' element= {<Tours/>}></Route>  
     <Route  path='/contact' element= {<Contact/>}></Route>  
      
    
</Routes>
</HomeLayout>
    )
}


export default Index;