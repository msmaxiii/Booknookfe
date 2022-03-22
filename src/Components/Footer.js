import React from 'react'

const Footer= ()=>{
    return(
        <div style = {container}>
         <h4>Contact Us</h4>   
        <h4> Rochelle Maxwell</h4>
        <h4>(404)777-9311</h4>  
        <h4>iamrochelle@fakeemail.com</h4>
        <h4>© 2022 All Rights Reserved, BookNook®</h4>

        </div>
    )
   
    }
 const container ={
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#4e8ab1",
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
 }
export default Footer