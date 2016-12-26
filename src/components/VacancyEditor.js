import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import * as vacancyActions from '../actions/VacancyActions.js'
import {showVacancy} from '../actions/VacancyActions.js'

import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Checkbox from 'react-bootstrap/lib/Checkbox'

class VacancyEditor extends React.Component{

	constructor(props){
		super(props);
		this.multiSelectIds = Array()
		this.vacancy = Array();
		if(this.props.params.action == 'edit'){
			const vacancy_id = this.props.params.vacancy_id;
			this.vacancy = this.props.vacancies.all.filter((v)=>{ return v.id==vacancy_id}, vacancy_id).shift()
			this.multiSelectIds = this.vacancy ? this.vacancy.assignees : Array()
		}else{
			// create
			const assignee = props.router.location.query.assignee;
			const assigneeUser = props.users.all.filter((v)=>{ return v.id==assignee}, assignee).shift()
			if(assigneeUser){
				this.multiSelectIds.push(assigneeUser.id)
			}
		}
	}


	multiSelect(key){
		const index = this.multiSelectIds.indexOf(key)
		if( index == -1){
			this.multiSelectIds.push(key)
		}else{
			this.multiSelectIds.splice(index,1)
		}
	}

	createVacancy(){
		const id = this.vacancy&&this.vacancy.id ? this.vacancy.id : this.props.vacancies.all.length+1
		if(''==this.title.value.trim()) return;
		this.props.editVacancy({
			id:id,
			title:this.title.value,
			description:this.description.value,
			assignees:this.multiSelectIds
		})
	}

	isValid(){
		return (''==this.title.value)
	}

	render(){
		const vacancy = this.vacancy

		return <div className="text-center">
			<small>Вакансия</small><br/>
			<b className="lead"></b>
			<p><FormControl inputRef={ref => { this.title = ref }} type="text" placeholder="Обязательно для заполнения" defaultValue={vacancy ? vacancy.title : ''} required/></p>
			<p><FormControl inputRef={ref => { this.description = ref }} componentClass="textarea"  defaultValue={vacancy ? vacancy.description : ''} /></p>

					{this.props.users.all.map( (user, index) => {
					  return <Checkbox  key={index} defaultChecked={(this.multiSelectIds.indexOf(user.id)>-1) ? 'checked' : ''} inline onChange={()=>{this.multiSelect(user.id)}} value={user.id} >{user.name}</Checkbox>
					})}

			<Button onClick={::this.createVacancy} className='btn btn-block btn-primary text-uppercase'  >сохранить</Button>
			<Link className='btn btn-block btn-link btn-sm' to='/'>к списку</Link>
		</div>
	}
}

function mapStateToProps(state) {
	return {...state}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(vacancyActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VacancyEditor)
