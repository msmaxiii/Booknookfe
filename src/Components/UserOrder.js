import { connect} from 'react-redux'
import BookList from './BookList'



const mapStateToProps =state =>({
  UserOrder:state.UserOrder
})

const UserOrder=({UserOrder}) =>{
  return (
    <div>
    <div>
        {UserOrder.length > 0 ? UserOrder.map((photo)=> <img src={photo} alt='photo'/> ) : <h3> No Orders</h3>}

    </div>
  </div>
  )
}
export default connect (mapStateToProps,{})(UserOrder)
