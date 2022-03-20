import { connect } from "react-redux"
import { fetchBook } from '../action'
import { useEffect } from "react";

const MapStateToProps = (state)=>({
    BookList: state.BookList,
    isFetching:state.isFetching,
    error:state.error,
})
function UserOrderList(props){
    // console.log(props);
    useEffect(() =>{
    props.fetchBook()
    },[])

return(

<div className='BookList-container'>

    {props.isFetching ? 'FetchingBook':""}
    {props.error ? props.error:""}
    {props.BookList && props.BookList.map(book => 
    <Book book ={book} favorite ={false} key ={book.id}/>)}

</div>
)}
export default connect(MapStateToProps,{fetchBook})(UserOrderList)

















// import { connect } from 'react-redux'
// import UserOrder from './UserOrder'

// const mapStateToProps =(state)=>{
//     UserOrderList
// }
// import { useState } from 'react';

// const Form = (props)=>{
//   const [name, setName]= useState('');
//   const [email,setEmail]=useState('');
//   const [phone,setPhone]=useState('');
//   const [order,setOrder]=useState('');

//   const handleSubmit =(e) =>{
//     e.preventDefault();


//     const newContact ={
//       name:name,
//       email:email,
//       phone:phone,

//     }

// <div>
//  <h2>Add Contact Information and Order</h2>

//     <form>
//       <label htmlFor='name'>Name</label>
//       <input
//       type='text'
//       name='name'
//       value={name}
//       onChange={(e)=>setName(e.target.value)}
//       />
//       <hr />

//       <label html For='email'>Email</label>
//       <input
//       type='text'
//       email='email'
//       value={email}
//       onChange={(e)=>setEmail(e.target.value)}
//       />
//       <hr />

//     <label htmlFor='phone'>Phone</label>
//     <input
//     type='text'
//     phone='phone'
//     value={phone}
//     onChange={(e)=>setPhone(e.target.value)}
//     />

// <label htmlFor='order'>Order</label>
//     <input
//     type='text'
//     order='order'
//     value={order}
//     onChange={(e)=>setPhone(e.target.value)}
//     />

//     <input type='submit'/>

//   </form>
//   </div>