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
    <td>
      <input type="checkbox" name={props.sender} value={props.sender} checked={props.organize} onChange={props.handlesOrganizeChange} />
    </td>
    <td> {props.sender} </td>
    <td> {props.domain} </td>
    <td> {props.email} </td>
    <td>
      <select value={props.folder} name={props.sender} onChange={props.handleFolderChange}>
        {props.folderOptions.map(choice => (
          <option value={choice} key={choice}>
            {choice}
          </option>
        ))}
      </select>
    </td>
  </tr>
);

export default TableLine;
