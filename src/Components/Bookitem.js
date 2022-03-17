import { connect} from 'react-redux'
import { addBook,updateBook,removeBook,}from '../action/actions'

const Book = (props)=>{
 
    const handleBook =(e)=>{
        console.log (e.target.id)
        props.addBook(e.target.id);
        props.updateBook (e.target.id);
        props.removeBook.filter(e.target.id)
    }
    return(
        <div className='book-container'> 
            <img src/>
            <div>
                button id ={props}
            </div>
            </div>
    )
}

export default connect(null,{addBook,updateBook,removeBook})(Book);