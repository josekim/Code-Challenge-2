// @flow

import React from 'react';

const SearchBar = (props: {
  option: string,
  dropDownOptions: Array<string>,
  handleOptionChange: Function,
  searchTerm: string,
  handleSearchChange: Function
}) => (
  <div>
    <select value={props.option} onChange={props.handleOptionChange}>
      {props.dropDownOptions.map(choice => (
        <option value={choice} key={choice}>
          {choice}
        </option>
      ))}
    </select>

    <input type="text" value={props.searchTerm} onChange={props.handleSearchChange} />
  </div>
);

export default SearchBar;
