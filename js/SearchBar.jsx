// @flow

import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  background-color: #dedede;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const DropDown = styled.select`
  float: left;
  font-size: 0.9em;
  margin-right: 5%;
`;

const SearchInput = styled.input`
  margin-left: 20%;
  font-size: 0.9em;
  width: 25%;
`;

const SearchBar = (props: {
  option: string,
  dropDownOptions: Array<string>,
  handleOptionChange: Function,
  searchTerm: string,
  handleSearchChange: Function
}) => (
  <SearchBarWrapper>
    <SearchInput type="text" value={props.searchTerm} onChange={props.handleSearchChange} placeholder="Search for a sender..." />

    <DropDown value={props.option} onChange={props.handleOptionChange}>
      {props.dropDownOptions.map(choice => (
        <option value={choice} key={choice}>
          {choice}
        </option>
      ))}
    </DropDown>
  </SearchBarWrapper>
);

export default SearchBar;
