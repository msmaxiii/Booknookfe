import { connect} from 'react-redux'
// import BookList from './BookList'
// import UserOrder from './UserOrder'
// import { useState } from 'react';



const mapStateToProps =state =>({
  UserOrder:state.UserOrder,
  // UserOrderList:state.UserOrderList
})

const UserOrder=({UserOrder}) =>{
console.log(UserOrder)

  return (
<div>

   <div>
    <p>Showcase Book Special all items $9.99</p>
   </div>

    <div>
        {UserOrder.length > 0 ? UserOrder.map((item)=> <img src={item.image} alt='books'/> ) : <h3> No Orders</h3>}

    </div>
    
  
  {/* const Form = (props)=>{
    const [name, setName]= useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [order,setOrder]=useState('');
  
    const handleSubmit =(e) =>{
      e.preventDefault();
    
  
      const newContact ={
        name:"name",
        email:"email",
        phone:"phone",
        order:"order"
      
      
  
  <div>
   <h2>Add Contact Information and Order</h2>
  
      <form>
        <label htmlFor='name'>Name</label>
        <input
        type='text'
        name='name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <hr />
  
        <label html For='email'>Email</label>
        <input
        type='text'
        email='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <hr />
  
      <label htmlFor='phone'>Phone</label>
      <input
      type='text'
      phone='phone'
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      />
  
  <label htmlFor='order'>Order</label>
      <input
      type='text'
      order='order'
      value={order}
      onChange={(e)=>setOrder(e.target.value)}
      />
  
      <input type='submit'/>
  
    </form>
    </div> */}

</div>
      
  )

}
export default connect (mapStateToProps,{})(UserOrder)
