import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as vacancyActions from '../actions/VacancyActions.js'
import {showVacancy} from '../actions/VacancyActions.js'

class Vacancy extends React.Component{

	constructor(props){
		super(props);
		const vacancy_id = this.props.params.vacancy_id;
		var vacancy = props.vacancies.all.filter((v)=>{ return v.id==vacancy_id}, vacancy_id).shift()
		if(vacancy){ this.props.showVacancy(vacancy) }else{
			console.log('asda');
			this.props.showVacancy( {
				'title':'не найдена',
				'description':'проверьте корректность url'
			})
		}
	}

	render(){
		const vacancy = this.props.vacancies.current
		return <div className="text-center">
			<small>Вакансия</small><br/>
			<b className="lead">{vacancy.title}</b>
			<p className="text-muted">{vacancy.description}</p>
			<div className={vacancy.id?'':'hidden'}><Link className='btn btn-block btn-link btn-sm' to={"/vacancies/"+vacancy.id+"/edit"}>редактировать</Link></div>
			<Link className='btn btn-block btn-default btn-sm text-uppercase' to='/'>к списку</Link>
		</div>
	}
}


function mapStateToProps(state) {
	return {...state}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(vacancyActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Vacancy)
