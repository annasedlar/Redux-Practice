import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'; 

//import the main reducer so we can give it to the store
import reducers from './reducers'; 

// below: needs inital state. reducers job is to get state and pass it back to store
const theStore = createStore(reducers); 

ReactDOM.render(
	<Provider store={theStore}>
  		<App />
  	</Provider>,
 	 document.getElementById('root')
);
