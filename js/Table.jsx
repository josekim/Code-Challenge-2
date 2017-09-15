// @flow

import React from 'react';
import TableLine from './TableLine';
import { FilterData } from './utility/helper';

const Table = (props: {
  data: Array<data>,
  folderOptions: Array<string>,
  searchTerm: string,
  option: string,
  handleFolderChange: Function,
  handlesOrganizeChange: Function
}) => (
  <table>
    <thead>
      <tr>
        <th> Organize</th>
        <th> Sender </th>
        <th> Domain </th>
        <th> Email </th>
        <th>Folder</th>
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
