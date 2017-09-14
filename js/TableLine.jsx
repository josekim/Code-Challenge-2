// @flow

import React from 'react';

const TableLine = (props: { organize: boolean, sender: string, domain: string, email: string, folder: string }) => (
  <tr>
    <th>
      <input type="checkbox" name="vehicle" checked={props.organize} />
    </th>
    <th> {props.sender} </th>
    <th> {props.domain} </th>
    <th> {props.email} </th>
    <th> {props.folder} </th>
  </tr>
);

export default TableLine;
