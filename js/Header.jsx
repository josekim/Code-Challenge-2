// @flow
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  border-style: solid;
  border-width: 75px 0px 0px 0px;
  border-color: #d6d7d6;
  text-align: center;
  color: #404347;
`;

const SubtextWrapper = styled.h2`
  width: 70%;
  font-size: 1em;
  border-style: solid;
  border-width: 2px 5px 2px 5px;
  padding: 2px 0px 2px 0px;
  border-color: #d6d7d6;
  margin: auto;
`;

const Header = (props: { title: string, subtext: string }) => (
  <HeaderWrapper>
    <h1 className="title-page"> {props.title}</h1>
    <SubtextWrapper className="title-subtext">{props.subtext}</SubtextWrapper>
  </HeaderWrapper>
);

export default Header;
