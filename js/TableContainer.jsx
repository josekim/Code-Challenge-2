// @flow

import React, { Component } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import data from '../Data.json';
import { newDataArray, newFolderArray } from './utility/helper';

const dropDownOptions = ['Show All', 'Organized', 'Unorganized'];
const folderOptions = newFolderArray(data);

class TableContainer extends Component {
  state = { option: 'Show All', searchTerm: '', data };
  handleOptionChange = (event: { target: { value: string } }) => {
    this.setState({ option: event.target.value });
  };
  handleSearchChange = (event: { target: { value: string } }) => {
    this.setState({ searchTerm: event.target.value });
  };
  handlesOrganizeChange = (event: { target: { value: string, name: string, checked: boolean } }) => {
    const newData = newDataArray(this.state.data, event.target.name, event.target.checked, event.target.value);
    this.setState({ data: newData });
  };
  handleFolderChange = (event: { target: { value: string, name: string, checked: boolean } }) => {
    const newData = newDataArray(this.state.data, event.target.name, event.target.checked, event.target.value);
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
          handleFolderChange={this.handleFolderChange}
          folderOptions={folderOptions}
        />
      </div>
    );
  }
}

export default TableContainer;
