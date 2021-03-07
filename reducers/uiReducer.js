import { types } from "../types/types";

const initialState = {
    modalOpen: false,
    modalOpenSala: false,
    loading: false,
    msgError: null
}



export const uiReducer = ( state = initialState, action ) =>{

  switch( action.type ){

    case types.uiOpenModal:
        return {
            ...state,
            modalOpen: true
        }

    case types.uiCloseModal:
        return {
            ...state,
            modalOpen: false
        }

        case types.uiOpenModalSala:
        return {
            ...state,
            modalOpenSala: true
        }

    case types.uiCloseModalSala:
        return {
            ...state,
            modalOpenSala: false
        }
        

    case types.uiSetError:
        return {
            ...state,
            msgError: action.payload
        }

        case types.uiRemoveError:
        return {
            ...state,
            msgError: null
        }

        


        default:
            return state;
    }



}
