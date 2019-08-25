import {combineReducers} from "redux";

import todo from "./todo";
import visibilityfilter  from "./visibilityFilter";

// each reducer manages independent parts of the state 
// state key name is set here
export default combineReducers({
    todo : todo,
    visibilityfilter
});