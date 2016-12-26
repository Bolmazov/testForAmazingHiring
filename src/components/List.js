import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class List extends Component{
	render(){
		const {vacancies, user} = this.props

		if(vacancies.length == 0) return <p className="text-muted">Вакансий нет</p>;

		var i = 0;
		var ul =  vacancies.map( (vacancy, index) => {
			if( !user || (user && -1 != vacancy.assignees.indexOf(user.id)) ){
				i++;
			    return <li key={index}>
			    	<Link to={"/vacancies/"+vacancy.id} >{vacancy.title}</Link>
			    </li>
		    }
	    });

		return <div>
			<b>Вакансии</b>
			{  i ? <ul>{ul}</ul> : ' не найдены'}
		</div>
	}
};
