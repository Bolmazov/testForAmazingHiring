/*eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router';

import Index from './components/Index';
import Vacancy from './components/Vacancy';
import Page404 from './components/Page404';
import VacancyEditor from './components/VacancyEditor';

export const routes = (
  <div>
    <Redirect from="/" to="/vacancies" />
    <Route path="/vacancies" component={Index} />
    <Route path="/vacancies/create" component={VacancyEditor} />
    <Route path="/vacancies/:vacancy_id" component={Vacancy} />
    <Route path="/vacancies/:vacancy_id/delete" component={Index} />
    <Route path="/vacancies/:vacancy_id/:action" component={VacancyEditor} />
    <Route path="*" component={Page404} />
  </div>);
/*eslint-enable */
