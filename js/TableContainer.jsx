// @flow

import React, { Component } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import data from '../Data.json';

const dropDownOptions = ['Show All', 'Organized', 'Unorganized'];

class TableContainer extends Component {
  state = { option: 'Show All', searchTerm: '' };
  handleOptionChange = (event: { target: { value: string } }) => {
    this.setState({ option: event.target.value });
  };
  handleSearchChange = (event: { target: { value: string } }) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div>
        <SearchBar
          option={this.state.option}
          dropDownOptions={dropDownOptions}
          handleOptionChange={this.handleOptionChange}
          searchTerm={this.state.searchTerm}
          handleSearchChange={this.handleSearchChange}
        />
        <Table data={data} />
      </div>
    );
  }
}

export default TableContainer;
