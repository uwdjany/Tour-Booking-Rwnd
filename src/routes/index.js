import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import AboutUs from '../views/About';
import HomeLayout from '../component/HomeLayout';
import Tours from '../views/Tours';
import Contact from '../views/Contact';
import DashboardLayout from '../component/DashboardLayout'; 
import App from '../views/dashboard/Alltours';
import Form from '../views/dashboard/Createtour';
import Register from '../component/register';

const Index=()=>
{
   
   return(
  
    <>
  


    <HomeLayout>


<Routes>
    <Route exact path='/' element= {<Home/>}></Route>
    <Route exact path='/home' element= {<Home/>}></Route>
     <Route exact path='/aboutus' element= {<AboutUs/>}></Route>
     <Route  path='/tours' element= {<Tours/>}></Route>  
     <Route  path='/contact' element= {<Contact/>}></Route>  
     <Route  path='/register' element= {<Register/>}></Route>  
    
</Routes>
<DashboardLayout>
        <Routes>
    <Route exact path='/admin' element= {<App/>}></Route>
    <Route exact path='/admin-dashboard' element= {<Form/>}></Route>
    </Routes>
    </DashboardLayout>
</HomeLayout>



</>
    )
}


export default Index;