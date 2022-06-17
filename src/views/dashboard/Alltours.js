import React from 'react';
import 'antd/dist/antd.css';
import allTours from '../../assets/data/tours.json'
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'title',


    },
    {
        title: 'Descrption',
        
        dataIndex:'descrption',
    
        },
        {
          title: 'Dua Date',
          
          dataIndex:'dueDate',
      
          }

    ]
   
const App = () => <Table columns={columns} dataSource={allTours}  />;

export default App;