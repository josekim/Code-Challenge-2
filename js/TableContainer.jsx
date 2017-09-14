// @flow

import React, { Component } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import data from '../Data.json';
import { newDataArray } from './utility/helper';

const dropDownOptions = ['Show All', 'Organized', 'Unorganized'];

class TableContainer extends Component {
  state = { option: 'Show All', searchTerm: '', data };
  handleOptionChange = (event: { target: { value: string } }) => {
    this.setState({ option: event.target.value });
  };
  handleSearchChange = (event: { target: { value: string } }) => {
    this.setState({ searchTerm: event.target.value });
  };
  handlesOrganizeChange = (event: { target: { value: string } }) => {
    const newData = newDataArray(this.state.data, event.target.value);
    this.setState({ data: newData });
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
        <Table
          data={this.state.data}
          searchTerm={this.state.searchTerm}
          option={this.state.option}
          handlesOrganizeChange={this.handlesOrganizeChange}
        />
      </div>
    );
  }
}

export default TableContainer;
