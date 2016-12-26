import React, { PropTypes, Component } from 'react'

import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import {setUser} from '../actions/FilterActions.js'

export default class Filter extends React.Component{

	render(){
		return (this.props.users.length == 0) ? <p className="text-muted">Рекрутеров нет</p> :
		<div>
			<b>Рекрутер </b>
			<DropdownButton title={false !== this.props.user ? this.props.user.name : 'не выбран'} id="filter">
				{this.props.users.map( (user, index) => {
			      return <MenuItem key={user.id}  onClick={() => {this.props.setUser(user)}}>{user.name}</MenuItem>
			    })}
				<MenuItem divider />
				<MenuItem onClick={() => {this.props.setUser(false)}}>не выбран</MenuItem>
			</DropdownButton>
		</div>
	}
}
