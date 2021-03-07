import { salaUpdate } from "../actions/salas";
import { types } from "../types/types";

const initialState = {
 dataSala:[]
      
}



export const salaReducer = ( state = initialState, action ) => {

  switch( action.type ){

        case types.salaAddNew:
           return{
             
            dataSala:[...state.dataSala,
              action.payload]
               
            }

        case types.salaUpdate:
        return {
          ...state,
          dataSala: state.dataSala.map(
             e => (e.id === action.payload.id ) ? action.payload : e )

      }
      
        case types.salaRemove:
        return {
            ...state,
            dataSala: state.dataSala.filter(
              e => (e.id !== action.payload.id)
            ),
          
        }
    



        default:
           return state;
           
  }



}