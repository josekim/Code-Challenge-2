// @flow

import React from 'react';
import TableLine from './TableLine';

const Table = (props: { data: Array<data> }) => (
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
    <tbody>{props.data.map(data => <TableLine key={data.email} {...data} />)}</tbody>
  </table>
);

export default Table;
