import React, { Component } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import data from '../Data.json';

class TableContainer extends Component {
  state = { data };
  render() {
    return (
      <div>
        <SearchBar />
        <Table />
      </div>
    );
  }
}

export default TableContainer;
