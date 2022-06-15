import React, { useState } from 'react';
import { Button,Card,Space,Carousel} from 'antd';
import image from '../assets/image/gorilla.jpg'
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';

import gorilla from "../assets/image/gorilla.jpg";
import lake from "../assets/image/lake.jpg";
import mount from "../assets/image/mountain.jpg";
const SingleTour =({data})=>{
    const [size, setSize] = useState('large');
return(
<>
<div>


<h1>{data.title}</h1>



<Carousel autoplay>
<img src={data.photo}/>
 <img src={data.photoes}/>
  </Carousel>
<p style={{color:'black',textAlign:"center"}}>prepareBy:{data.prepareBy}</p>
<p  style={{color:'gray',textAlign:"center"}}>{data.descrption}</p>
<p  style={{color:'black',textAlign:"center"}}>DueDate:{data.dueDate}</p>



<Card
      title="Application Information"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
        
        <input type='text' placeholder='Text ur Email'/>
        
      <br />
      <br />
     <input type='password' placeholder='Text ur Password'/>

    
     <br />
      <br />
         <Button type="primary" shape="round"  size={size}>
        Send Application!
      </Button >
    </Card>

</div>






</>
    
)
}
export default SingleTour;