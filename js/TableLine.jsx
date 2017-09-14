// @flow

import React from 'react';

const TableLine = (props: {
  organize: boolean,
  sender: string,
  domain: string,
  email: string,
  folder: string,
  handlesOrganizeChange: Function
}) => (
  <tr>
    <th>
      <input type="checkbox" name="{props.sender}" value={props.sender} checked={props.organize} onChange={props.handlesOrganizeChange} />
    </th>
    <th> {props.sender} </th>
    <th> {props.domain} </th>
    <th> {props.email} </th>
    <th> {props.folder} </th>
  </tr>
);

export default TableLine;
