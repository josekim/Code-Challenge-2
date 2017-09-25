// @flow

import React from 'react';
import styled from 'styled-components';
import { FolderColor } from './utility/FolderColor';

const FolderDropdown = styled.select`
  width: 95%;
  font-size: 1em;
`;

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
    <td className="organize">
      <input type="checkbox" name={props.sender} value={props.sender} checked={props.organize} onChange={props.handlesOrganizeChange} />
    </td>
    <td className="white-cell"> {props.sender} </td>
    <td className="white-cell"> {props.domain} </td>
    <td className="white-cell"> {props.email} </td>
    <td className="white-cell">
      <FolderDropdown value={props.folder} name={props.sender} onChange={props.handleFolderChange}>
        {props.folderOptions.map(choice => (
          <option value={choice} key={choice}>
            {choice}
          </option>
        ))}
      </FolderDropdown>
    </td>
    {FolderColor(props.folder)}
  </tr>
);

export default TableLine;
