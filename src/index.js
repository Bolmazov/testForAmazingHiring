import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { routes } from './routes'
import reducer from './reducers/index.js'
import { redirect } from './middlewares/redirect'



var initialState = {
	users:{
		current:false,
		all: [{
			  "id": 1,
			  "name": "John Doe"
			}, {
			  "id": 2,
			  "name": "Min Nguen"
			}, {
			  "id": 3,
			  "name": "Liza Black"
			}, {
			  "id": 4,
			  "name": "Emily Cooper"
			}, {
			  "id": 5,
			  "name": "Kim Li"
		}],
	},
	vacancies:{
		current:false,
		all: [
			{
				"id": 1,
				"title": "Scala Developer @ Acme",
				"assignees": [3],
				"description": "5+ expirience"
			},{
				"id": 2,
				"title": "Android Developer @ Green Robot Studio",
				"assignees": [1, 2],
				"description": "Knows how to code on Java"
			}
		]
	}
};

var store = createStore(
	reducer,
	initialState,
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(redirect)
)

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
	, document.getElementById('app')
);
