import React from 'react';
import { Link } from 'react-router';

export default function () {
  return (<div className="text-center">
    <h1>404</h1>
    <small>
      <Link to="/">назад</Link>
    </small>
  </div>);
}
