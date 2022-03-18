import { Link } from "react-router-dom"

const NavBar =()=>{
    return(
        <nav style = {container}>
            <Link to ='/' style={{color:"#6b26d9"}}>Home</Link>
            <Link to ='/About'>About</Link>
            <Link to ='/BookList'>Books</Link>
            <Link to ='/UserOrder'>Order</Link>
        </nav>
    )
}
const container ={
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#e98416",
    height: "50px"
 
}


export default NavBar



