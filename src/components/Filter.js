import React from 'react';

import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

export default function (props) {
  return (props.users.length === 0) ? <p className="text-muted">Рекрутеров нет</p> :
  <div>
    <b>Рекрутер </b>
    <DropdownButton title={props.user.length !== 0 ? props.user.name : 'не выбран'} id="filter">
      {props.users.map(user => <MenuItem
        key={user.id}
        onClick={() => { props.setUser(user); }}
      >{user.name}</MenuItem>)}
      <MenuItem divider />
      <MenuItem onClick={() => { props.setUser([]); }} >не выбран</MenuItem>
    </DropdownButton>
  </div>;
}
