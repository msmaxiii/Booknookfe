
import { connect } from 'react-redux'
import Book from './BookItem'
import { useEffect } from 'react';
import { fetchBook,addBook } from '../action/actions';



const MapStateToProps =(state)=>({
    bookList: state.BookData,
    isFetching:state.isFetching,
    error:state.error,
})


function BookList(props){
    // console.log(props)
    useEffect(()=>{
        props.fetchBook()
    },[])
    // const handleBookList=(e) => {
    //   console.log(e.target.id)
    //   props.addBook(e.target.id);
     
    // }
    // console.log(props.bookList)
    return(
        
        <div className ='bookList-container'>
            {props.isFetching ? 'FetchingBook':""}
            {props.error ? props.error:""}
            {props.bookList.length > 0 ? props.bookList.map(book =>
             <Book book={book} />):"loading"}
              
            
        </div>
    )
}

export default connect(MapStateToProps,{fetchBook, addBook})(BookList)