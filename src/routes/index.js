import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import AboutUs from '../views/About';
import HomeLayout from '../component/HomeLayout';
import Tours from '../views/Tours';
import Contact from '../views/Contact';
import AdminRoutes from './admin'
import Register from '../component/register';
import Managerusers from '../views/admin/Managerusers';
import ManagerTrip from '../views/admin/ManagerTrip';

import Chartline from '../views/admin/Chartline';
import Piechart from '../views/admin/Piechart';



const Index=()=>
{
   
   return(
  

  


    <HomeLayout>


<Routes>
    <Route exact path='/' element= {<Home/>}></Route>
    <Route exact path='/home' element= {<Home/>}></Route>
     <Route exact path='/aboutus' element= {<AboutUs/>}></Route>
     <Route  path='/tours' element= {<Tours/>}></Route>  
     <Route  path='/contact' element= {<Contact/>}></Route>  
     <Route  path='/register' element= {<Register/>}></Route>  
    <Route path='/admin/user' element={<Managerusers/>}/>
    <Route path='/admin/trip' element={<ManagerTrip/>}/>
    <Route path='/dashboard' element={<Chartline/>}/>
    <Route path='admin/pie' element ={<Piechart/>}/>
</Routes>

</HomeLayout>




    )
}


export default Index;