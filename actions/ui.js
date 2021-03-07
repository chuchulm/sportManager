import { types } from "../types/types"





export const uiOpenModal = () =>({ type: types.uiOpenModal });
export const uiCloseModal = () =>({ type: types.uiCloseModal });

export const uiOpenModalSala = () =>({ type: types.uiOpenModalSala });
export const uiCloseModalSala = () =>({ type: types.uiCloseModalSala });
    
export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err
})

export const removeError = () => ({
    type: types.uiRemoveError,
    
})

