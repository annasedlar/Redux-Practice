// get the combineReducers method from redux. MASTER reducers file! 
// doesn't manage any particular piece of state rather, it manages/contains all other reducers
import { combineReducers } from 'redux'; 

//import each reducer here
import StudentReducer from './StudentReducer';
import StudentReducer2 from './StudentReducer2';

const rootReducer = combineReducers({
	// will pass each reducer as a key/property. each property/key will be available as state.key
	students: StudentReducer,
	students2: StudentReducer2
});


export default rootReducer; 