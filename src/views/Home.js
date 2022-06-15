import React from 'react';


import gorilla from "../assets/image/gorilla.jpg";
import lake from "../assets/image/lake.jpg";
import mount from "../assets/image/mountain.jpg";
import "./Home.css";
import 'antd/dist/antd.css';

import { Carousel } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import HomeLayout from '../component/HomeLayout';



const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

const Home = () => {
    return (
    
        <div className='home-container'>
          
            
            <div className='home-content'>
                <h1 className='heading-title'>Rwanda booking Tour</h1>
<div className='carousel-img'>
<Carousel autoplay>
<img src={gorilla} alt="gorilla"/>
<img src={lake} alt="" />
<img src={mount} alt=""/>

                </Carousel>
                
                <Search
      placeholder="Search Tour"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />

</div>

         <h3 className='topTour'>Top Tour</h3>   
         <hr className='align'></hr>   
            </div>
            
        </div>
        
    )
};
export default Home;