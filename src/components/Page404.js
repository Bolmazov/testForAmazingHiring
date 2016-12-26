import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Page404 extends React.Component{
	render(){
		return <div className="text-center">
			<h1>404</h1>
			<small>
				<Link to="/">назад</Link>
			</small>
		</div>
	}
}
