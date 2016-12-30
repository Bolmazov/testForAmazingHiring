import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import List from './List';
import Filter from './Filter';

import * as filterActions from '../actions/FilterActions';

class Index extends React.Component {

  static propTypes = {
    users: React.PropTypes.shape({
      current: React.PropTypes.array,
      all: React.PropTypes.array,
    }),
    vacancies: React.PropTypes.shape({
      current: React.PropTypes.array,
      all: React.PropTypes.array,
    }),
    setUser: React.PropTypes.func,
    router: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    const assignee = props.router.location.query.assignee;
    const assigneeUser = props.users.all.filter(v => v.id === assignee, assignee).shift();
    if (assigneeUser) { this.props.setUser(assigneeUser); } else {
      this.props.setUser([]);
    }
  }

  render() {
    return (
      <div>
        <div className="well">
          <Filter
            users={this.props.users.all}
            user={this.props.users.current}
            setUser={this.props.setUser}
          />
          <List vacancies={this.props.vacancies.all} user={this.props.users.current} />
        </div>
        <Link className="btn btn-block btn-primary text-uppercase" to="/vacancies/create">Добавить вакансию</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(filterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
