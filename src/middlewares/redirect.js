import { browserHistory } from 'react-router'

export const redirect = store => next => action => {
	if (action.type === 'SET_USER') {
		var url = action.payload.id ? '?assignee='+action.payload.id : ""
		browserHistory['push'](url)
	}else if (action.type === 'EDIT_VACANCY') {
			browserHistory['push']('/')
	}
	return next(action)
}
