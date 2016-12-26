import { combineReducers } from 'redux'


function currentUserReducer(state=[], action){
	if(action.type == 'SET_USER' ){
		return action.payload
	}
	return state;
}

function allUsersReducer(state=[], action){
	return state;
}

function currentVacancyReducer(state=[], action){
	if(action.type == 'SHOW_VACANCY' ){
		return action.payload
	}
	return state;
}

function allVacanciesReducer(state=[], action){
	if(action.type == 'EDIT_VACANCY' ){
		var f = false;
		var _state = state.map(function(vacancy) {
			if(vacancy.id==action.payload.id){
				f = true;
				return action.payload
			}else{
				return vacancy
			}
		}, action.payload);
		console.log(f);
		if(!f){
			_state.push(action.payload)
		}

		return _state
	}
	return state;
}


export default combineReducers({
	users:combineReducers({
		current:currentUserReducer,
		all:allUsersReducer
	}),
	vacancies:combineReducers({
		current:currentVacancyReducer,
		all:allVacanciesReducer
	}),
})
