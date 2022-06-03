import { combineReducers } from "redux";
import authReducer from "./authReducer";
import regReducer from "./regReducer";


const rootreducers = combineReducers({
 authReducer : authReducer,
 regReducer : regReducer
});

export default rootreducers;