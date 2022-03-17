import './App.css';
import Booklist from './Components/Booklist'
import UserOrder from './Components/UserOrder'
import Bookitem from './Components/Bookitem'
import UserOrderlist from './Components/UserOrderlist'
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
    <div className="App">
      
      
      <NavBar/>
      <Home/>
      <About/>
      {/* <Booklist/> */}

      <Footer/>
      
    </div>
  );
}

export default connect(mapStateToProps, {fetchBook})(App)