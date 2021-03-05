import { combineReducers } from "redux";
import { sedeReducer } from "./sedeReducer";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
    
    ui: uiReducer,
    sede: sedeReducer,
    
})