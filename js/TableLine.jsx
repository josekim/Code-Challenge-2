// @flow

import React from 'react';

const TableLine = (props: {
  organize: boolean,
  sender: string,
  domain: string,
  email: string,
  folder: string,
  folderOptions: Array<string>,
  handleFolderChange: Function,
  handlesOrganizeChange: Function
}) => (
  <tr>
    <th>
      <input type="checkbox" name={props.sender} value={props.sender} checked={props.organize} onChange={props.handlesOrganizeChange} />
    </th>
    <th> {props.sender} </th>
    <th> {props.domain} </th>
    <th> {props.email} </th>
    <th>
      <select value={props.folder} name={props.sender} onChange={props.handleFolderChange}>
        {props.folderOptions.map(choice => (
          <option value={choice} key={choice}>
            {choice}
          </option>
        ))}
      </select>
    </th>
  </tr>
);

export default TableLine;
