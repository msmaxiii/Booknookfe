import axios from 'axios'

export const FETCH_BOOK_START = "FETCH_BOOK_START"
export const FETCH_BOOK_ORDERED =" FETCH_BOOK_ORDERED"
export const FETCH_BOOK_FAIL ="FETCH_BOOK_FAIL"
export const ADD_BOOK = "ADD_BOOK"
export const UPDATE_BOOK ="UPDATE_BOOK"
export const REMOVE_BOOK ="REMOVE_BOOK"
export const USER_ORDER ="ORDER"

export const fetchBook =()=>(dispatch)=>{
    dispatch({type:FETCH_BOOK_START})

axios
.get("https://booknook2.herokuapp.com/book/")
.then(data=>{
    console.log(data.data.books)
    dispatch({type:FETCH_BOOK_ORDERED,payload:data.data.books})
})
.catch(err=>{
    dispatch({type:FETCH_BOOK_FAIL,payload:err.message})
})
}
export const addBook = (book)=>(dispatch)=>{
    console.log(book)
    dispatch({type:FETCH_BOOK_START})
    axios
    .post("https://booknook2.herokuapp.com/book",book)
    .then(data=> dispatch ({type:ADD_BOOK, payload:data.data.bookItem}))
    .catch(err=> dispatch ({type:FETCH_BOOK_FAIL, payload:err.message}))
}
export const updateBook = (id, update)=> (dispatch)=>{
    dispatch({type:FETCH_BOOK_START})
    .put(`https://booknook2.herokuapp.com/book/${id}`)
    .then(data => dispatch ({type:REMOVE_BOOK,payload:data}))
    .catch(err => dispatch({type:FETCH_BOOK_FAIL, payload:err.message}))
}

export const removeBook=(id,book)=>(dispatch)=>{
    dispatch ({type:FETCH_BOOK_START})
    axios
    .delete(`https://booknook2.herokuapp.com/book/${id}`)
    .then(data => dispatch({type: REMOVE_BOOK, payload: book}))
    .catch(err => dispatch({type: FETCH_BOOK_FAIL, payload: err.message}))
}
export const userOrder =(order)=>(dispatch)=>{
    dispatch ({type:USER_ORDER, payload: order})
    console.log(order)
    
}


