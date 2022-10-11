import Reacte from "react";
import { Table,Tag,Space,Drawer} from "antd";
import users from '../assets/data/users.json'
import SingleUser from "./admin/ViewUser";
import React,{useState} from 'react';


const UserTables =()=>{

    const [visibleDrawer,setVisibleDrawer]=useState(false)


    const columns =[

      

        {
            title:"Name",
            dataIndex:'name',
            key:'name',
            // render:(text) => <a>{text.split(" ")[0]}</a>,
        },
        {
            title:"Gender",
            dataIndex:'gender',
            key:'gender',
            
        },
        {
            title:"Email",
            dataIndex:'email',
            key:'email',
            
        },
    
        {
            title:"Active",
            dataIndex:'isActive',
            key:'isActive',
              render:(text) =>(
             <Tag color={text? "green" : "red"} >{text.toString()}</Tag>
              ),
    
        },
        {
            title:"Action",
            key:"action",
            render:(_,record)=>(
                <Space>
                    <a>Active</a>
                    <a>Delete</a>
                    <a onClick={()=>{
                        setVisibleDrawer(true)
                    }}>View</a>
                </Space>
            )
        }
    ]
    




    
    return(
        <>
        <Drawer visible={visibleDrawer} onClose={()=>{setVisibleDrawer(false)}}><SingleUser data={users[0]}/></Drawer>
        <Table columns={columns} dataSource={users}></Table></>
    )
   


}
export default UserTables;