import { connect } from "react-redux"
import { fetchBook } from '../action/actions'
import { useEffect } from "react";
import Book from './BookItem'

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

















 