import { combineReducers } from 'redux';

function currentUserReducer(state = [], action) {
  if (action.type === 'SET_USER') {
    return action.payload;
  }
  return state;
}

function allUsersReducer(state = []) {
  return state;
}

function currentVacancyReducer(state = [], action) {
  if (action.type === 'SHOW_VACANCY') {
    return action.payload;
  }
  return state;
}

function allVacanciesReducer(state = [], action) {
  if (action.type === 'EDIT_VACANCY') {
    let f = false;
    const STATE = state.map((vacancy) => {
      if (vacancy.id === action.payload.id) {
        f = true;
        return action.payload;
      }
      return vacancy;
    }, action.payload);
    if (!f) {
      STATE.push(action.payload);
    }

    return STATE;
  }
  return state;
}


export default combineReducers({
  users: combineReducers({
    current: currentUserReducer,
    all: allUsersReducer,
  }),
  vacancies: combineReducers({
    current: currentVacancyReducer,
    all: allVacanciesReducer,
  }),
});
