import React from "react";
import {Space, Button,Card} from "antd";

const SingleUser = ({ data }) => {
  return (
    <>
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight:"100vh",
        background:"gray"
      }}
    >
        <img src={data?.profile} style={{Position:"absolute",marginBottom:"center",marginRight:"6px",
         width:"230px"}}/>
        <h1 style={{color:"white"}}>{data?.name}</h1>
        <p style={{color:"white"}}>{data?.about}</p>
    </div>
    <Card title="Create_Your_Account" style={{fontSize:"10px",textAlign:"center",background:"gray",top:"1px"}}>
        <Space direction="vertical"></Space>   
       FirstName: <input placeholder="FirstName" style={{fontSize:"10px",textAlign:"center",padding:"4px"}}></input><br></br>
        LastName:<input placeholder="LastName"style={{fontSize:"10px",textAlign:"center",padding:"4px",margin:"5px"}}></input><br></br>
       Email:      <input placeholder="Email"style={{fontSize:"10px",textAlign:"center",padding:"4px",margin:"5px"}}></input><br></br>
        <Button onClick={()=>{}}>Create</Button>
        </Card>
        </>
  );
  
  
};
export default SingleUser;