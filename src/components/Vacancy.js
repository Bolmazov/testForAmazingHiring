import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import * as vacancyActions from '../actions/VacancyActions';

class Vacancy extends React.Component {

  static propTypes = {
    params: React.PropTypes.object,
    vacancies: React.PropTypes.object,
    showVacancy: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    const vacancyId = +props.params.vacancy_id;
    const vacancy = props.vacancies.all.filter(v => v.id === vacancyId, vacancyId).shift();
    if (vacancy) { this.props.showVacancy(vacancy); } else {
      this.props.showVacancy({
        title: 'не найдена',
        description: 'проверьте корректность url',
      });
    }
  }

  render() {
    const vacancy = this.props.vacancies.current;
    return (<div className="text-center">
      <small>Вакансия</small><br />
      <b className="lead">{vacancy.title}</b>
      <p className="text-muted">{vacancy.description}</p>
      <div className={vacancy.id ? '' : 'hidden'}><Link className="btn btn-block btn-link btn-sm" to={`/vacancies/${vacancy.id}/edit`}>редактировать</Link></div>
      <Link className="btn btn-block btn-default btn-sm text-uppercase" to="/">к списку</Link>
    </div>);
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(vacancyActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Vacancy);
