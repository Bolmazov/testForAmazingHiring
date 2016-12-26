
export function showVacancies() {
	return {
		type: 'SHOW_VACANCIES'
	};
}

export function showVacancy(vacancy) {
	return {
		type: 'SHOW_VACANCY',
		payload:vacancy
	};
}

export function editVacancy(vacancy) {
	return {
		type: 'EDIT_VACANCY',
		payload:vacancy
	};
}

export function deleteVacancy(id) {
	return {
		type: 'DELETE_VACANCY',
		id
	};
}
