// import { useState } from 'react'
// import {ADD_BOOK, REMOVE_BOOK, UPDATE_BOOK, } from '../action/actions';

// const initialState ={
//     BookData:[],
//     isLoading:false,
//     error:''
// }
// export default function reducer (state = initialState,action){
//     switch (action.type){


// case ADD_BOOK:
//     return{...state,book:[...state.book,action.payload]
//     }
// case UPDATE_BOOK:
//     let updatedState=[]
//     for (let i = 0; i< state.BookData.length; i++){
//         if (state.BookData[i]._id === action.payload._id){
//             updatedState.push(action.payload)
//         } else{
//             updatedState.push(state.Book[i])
//         }
//     }
//     return {
//         ...state, ToDoData: updatedState
//     }
// case REMOVE_BOOK:
//     let newState = state.book.filter(book=>book!==action.payload)
//     return{
//         ...state,book:newState,
//     }
//     default:
//         return state
//  }
// }