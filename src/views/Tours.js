import React, { useState } from 'react';
import {Card,Image,Space,Typography,Drawer}from "antd"

import './tour.css'
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';

import single from '../views/Tours';
import allTours from '../assets/data/tours.json'
import SingleTour from '../component/singleTour';

const{Text,Title}=Typography

  





const Tours =()=>{

    const [size, setSize] = useState('large');

    const [selectTour,setSelecTour]=useState({});
const [showDrawer,setShowDrawer]=useState(true);

    return(
       




<>


<div style={{width:'100%',height:'auto', padding:'20px 100px' , textAlign:"center"}}>
<Card className="card">

    
       {allTours.map ((tour) =>(
       <Card.Grid style={{width:"30%",minHeight:"30rem"}} className="container-card">
            <Space direction="vertical">
            <Image preview={true} src={tour.photo} />
           <Title level={4} style={{color:"rgb(6, 172, 228)"}}> 
           {tour.title.toUpperCase()}
            </Title>
            <Text type="secondary" italic>{tour.descrption}</Text>
                <Space>

<Text>DUE Date:</Text>
<Text strong>{tour.dueDate} 10h30</Text>


      
                </Space>
                
                <Button type="primary" shape="round"  size={size} onClick={()=>{
                    setSelecTour(tour)
                    setShowDrawer(true)
                }}>
        Book Now!
      </Button >
                </Space>
            
    </Card.Grid>)) }
</Card>
</div>



<Drawer title="single Tour"
 placement='right' visible={showDrawer}
  onClose={()=>{setShowDrawer(false)}}>
<SingleTour data={selectTour}/>
</Drawer>
</>


);
    
}
export default Tours