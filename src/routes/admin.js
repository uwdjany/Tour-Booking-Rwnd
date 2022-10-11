import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Managerusers from '../views/admin/Managerusers';
import DashboardLayout from '../component/DashboardLayout'; 


const Index =()=>{
    return(
        <DashboardLayout>
        {/* <Routes>
    <Route exact path='/admin/users' element= {<Managerusers/>}></Route>

    </Routes> */}
    </DashboardLayout>
    )
}
export default Index;