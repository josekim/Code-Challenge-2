// @flow

import React from 'react';
import styled from 'styled-components';
import TableLine from './TableLine';
import { FilterData } from './utility/helper';

const Organize = styled.th`
  width: 10%;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  vertical-align: middle;
`;
const Fields = styled.th`
  width: 23%;
  padding-top: 15px;
  padding-bottom: 15px;
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
        <Fields> Sender </Fields>
        <Fields> Domain </Fields>
        <Fields> Email </Fields>
        <Fields> Folder </Fields>
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
