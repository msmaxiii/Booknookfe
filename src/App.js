import './App.css';
import BookList from './Components/BookList'
// import UserOrder from './Components/UserOrder'
import BookItem from './Components/BookItem'
import UserOrderList from './Components/UserOrderList'
// import {Switch, Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import { useEffect } from 'react'
import { fetchBook }from './action/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})

function App(props) {
  useEffect(()=>{
    props.fetchBook()
},[])
  return (
    < div className="App">
      <NavBar/>
      <Home/>
      <About/>
      
      <BookItem />
      {props.isLoading ? "Book LIST IS LOADING" : "Book LIST LOADED" }
      <BookList />
      {props.error !== "" ? props.error : ""}
      
      <Footer/>
      
    </div>
  );
}

export default connect(mapStateToProps, {fetchBook})(App)