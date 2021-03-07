import { combineReducers } from "redux";
import { salaReducer } from "./salaReducer";
import { sedeReducer } from "./sedeReducer";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
    
    ui: uiReducer,
    sede: sedeReducer,
    sala: salaReducer,
})