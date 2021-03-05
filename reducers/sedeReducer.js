import { types } from "../types/types";

const initialState = {
 data:[]
      
}



export const sedeReducer = ( state = initialState, action ) =>{

  switch( action.type ){

       case types.sedeAddNew:
           return{
             
            data:[...state.data,
              action.payload]
               
            }
    



        default:
           return state;
    }



}