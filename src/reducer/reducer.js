import data from '../dummyData'

import { FETCH_BOOK_START, FETCH_BOOK_ORDERED, FETCH_BOOK_FAIL,ADD_BOOK, REMOVE_BOOK, UPDATE_BOOK, } from '../action/actions';

const initialState ={
    BookData:[],
    isLoading:false,
    error:''
}
export default function reducer (state = initialState,action){
    switch (action.type){
        case FETCH_BOOK_START:
            return{
                ...state,BookData:[...state.BookData],error:"", isLoading:true
            }
        case FETCH_BOOK_FAIL:
            return{
                ...state,BookData:state.BookData,error: action.payload, isLoading:false
            } 
            
        case FETCH_BOOK_ORDERED:
            return{
                ...state,BookData:action.payload,error:"", isLoading:false
            }    
        case ADD_BOOK:
            return{...state,book:[...state.book,action.payload]
            }
        case UPDATE_BOOK:
            return{
                
            }    
               
        case REMOVE_BOOK:
            let newState = state.book.filter(book=>book!==action.payload)
            return{
                ...state,book:newState,
            }
            default:
                return state
        }
    }                





