import { connect} from 'react-redux'
import dummyData from '../dummyData'
import { addBook,updateBook,removeBook,userOrder}from '../action/actions'

const Book = (props)=>{
 console.log(props.book)
    const handleBook=(e)=>{
        console.log (e.target.id)
        props.userOrder(props.book);
        // props.updateBook (e.target.id);
        // props.removeBook.filter(e.target.id)
       
    }
    return(
        <div className='book-container'> 
       
             <h3>{props.book.title}</h3>
            <img src={props.book.image}alt='books'/>
        <div>
            <button id ={props.book}onClick={handleBook}>
             {props.books ?'Remove from Order':'Add to Order'}
             </button>

        </div>
            </div>
    )
}

export default connect(null,{addBook,updateBook,removeBook,userOrder})(Book);