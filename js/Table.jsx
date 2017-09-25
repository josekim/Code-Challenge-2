// @flow

import React from 'react';
import styled from 'styled-components';
import TableLine from './TableLine';
import { FilterData } from './utility/helper';

const Organize = styled.th`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  vertical-align: middle;
`;

const Table = (props: {
  data: Array<data>,
  //eslint-disable-next-line
  folderOptions: Array<string>,
  searchTerm: string,
  option: string,
  //eslint-disable-next-line
  handleFolderChange: Function,
  handlesOrganizeChange: Function
}) => (
  <table>
    <thead>
      <tr>
        <Organize> Organize </Organize>
        <th> Sender </th>
        <th> Domain </th>
        <th> Email </th>
        <th> Folder </th>
        <th />
      </tr>
    </thead>
    <tbody>
      {FilterData(props.data, props.searchTerm, props.option).map(data => (
        <TableLine
          key={data.email}
          folderOptions={props.folderOptions}
          handleFolderChange={props.handleFolderChange}
          handlesOrganizeChange={props.handlesOrganizeChange}
          {...data}
        />
      ))}
    </tbody>
  </table>
);

export default Table;
