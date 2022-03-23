import { NavLink } from "react-router-dom"

const NavBar =()=>{
    return(
        <nav style = {container}>
            <NavLink to ='/' style={{color:"#000"}}>Home</NavLink>
            <NavLink to ='/About' style={{color:"#000"}}>About</NavLink>
             <NavLink to ='/BookList' style={{color:"#000"}}>Books</NavLink>
             <NavLink to ='/UserOrder' style={{color:"#000"}}>Order</NavLink> 
            
           
        </nav>
    )
}
const container ={
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#4e8ab1",
    height: "50px"
 
}


export default NavBar



