import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';

import * as vacancyActions from '../actions/VacancyActions';

class VacancyEditor extends React.Component {

  static propTypes = {
    params: React.PropTypes.object,
    vacancies: React.PropTypes.object,
    users: React.PropTypes.object,
    router: React.PropTypes.object,
    editVacancy: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.multiSelectIds = [];
    this.vacancy = {};
    if (props.params.action === 'edit') {
      const vacancyId = +props.params.vacancy_id;
      this.vacancy = props.vacancies.all.filter(v => v.id === vacancyId, vacancyId).shift();
      this.multiSelectIds = this.vacancy ? this.vacancy.assignees : {};
    } else {
      // create
      const assignee = +props.router.location.query.assignee;
      const assigneeUser = props.users.all.filter(v => v.id === assignee, assignee).shift();
      if (assigneeUser) {
        this.multiSelectIds.push(assigneeUser.id);
      }
    }
  }


  multiSelect(key) {
    const index = this.multiSelectIds.indexOf(key);
    if (index === -1) {
      this.multiSelectIds.push(key);
    } else {
      this.multiSelectIds.splice(index, 1);
    }
  }

  createVacancy() {
    const id = this.vacancy && this.vacancy.id ?
      this.vacancy.id :
      this.props.vacancies.all.length + 1;

    if (this.title.value.trim() === '') return;
    this.props.editVacancy({
      id,
      title: this.title.value,
      description: this.description.value,
      assignees: this.multiSelectIds,
    });
  }

  isValid() {
    return (this.title.value === '');
  }

  render() {
    const vacancy = this.vacancy;
    return (<div className="text-center">
      <small>Вакансия</small><br />
      <p><FormControl inputRef={(ref) => { this.title = ref; }} type="text" placeholder="Обязательно для заполнения" defaultValue={vacancy ? vacancy.title : ''} required /></p>
      <p><FormControl inputRef={(ref) => { this.description = ref; }} componentClass="textarea" defaultValue={vacancy ? vacancy.description : ''} /></p>

      {this.props.users.all.map((user, index) =>
        <Checkbox
          key={index}
          defaultChecked={(this.multiSelectIds.length && this.multiSelectIds.indexOf(user.id) > -1) ? 'checked' : ''}
          inline
          onChange={() => this.multiSelect(user.id)}
          value={user.id}
        >{user.name}</Checkbox>)}

      <Button onClick={() => this.createVacancy()} className="btn btn-block btn-primary text-uppercase" >сохранить</Button>
      <Link className="btn btn-block btn-link btn-sm" to="/">к списку</Link>
    </div>);
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(vacancyActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VacancyEditor);
