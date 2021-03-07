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

            case types.sedeUpdate:
              return {
                ...state,
                data: state.data.map(
                   e => (e.id === action.payload.id ) ? action.payload : e )
      
            }
            
              case types.sedeRemove:
              return {
                  ...state,
                  data: state.data.filter(
                    e => (e.id !== action.payload.id) 
                  ),
                
              }
    



        default:
           return state;
           
  }



}