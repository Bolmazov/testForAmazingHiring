import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  const { vacancies, user } = props;

  if (vacancies.length === 0) return <p className="text-muted">Вакансий нет</p>;

  let i = 0;
  const ul = vacancies.map((vacancy, index) => {
    if (user.length === 0 || (user && vacancy.assignees.indexOf(user.id)) !== -1) {
      i += 1;
      return (<li key={index}>
        <Link to={`/vacancies/${vacancy.id}`} >{vacancy.title}</Link>
      </li>);
    } return '';
  });

  return (<div>
    <b>Вакансии</b>
    { i ? <ul>{ul}</ul> : ' не найдены'}
  </div>);
}
