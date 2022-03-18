import { useState } from 'react';
import { connect } from 'react-redux'
import Book from './BookItem'
import { useEffect } from 'react';
import { fetchBook } from '../action/actions';


const MapStateToProps =(state)=>({
    bookList: state.BookData,
    isFetching:state.isFetching,
    error:state.error,
})

function BookList (props){
    // console.log(props)
    useEffect(()=>{
        props.fetchBook()
    },[])
    // console.log(props.bookList)
    return(
        
        <div className ='bookList-container'>
            {/* <h1>book pg</h1> */}
            {/* {props.isFetching ? 'FetchingBook':""}
            {props.error ? props.error:""} */}
            {props.bookList.length > 0 ? props.bookList.map(book =>
             <Book book={book} />):"loading"}
             <button></button>

        </div>
    )
}


// const Form = (props)=>{
//   const [name, setName]= useState('');
//   const [email,setEmail]=useState('');
//   const [phone,setPhone]=useState('');
//   const [order,setOrder]=useState('')

//   const handleSubmit =(e) =>{
//     e.preventDefault();


//     const newContact ={
//       name:name,
//       email:email,
//       phone:phone,
//       order:order

//     }
// console.log(newContact);
  
// props.setUserData(prevState=>[newContact,...prevState]);
//   }
// return(
// {/* <div>
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
// </div>
// ); */}
// };

export default connect(MapStateToProps,{fetchBook})(BookList)