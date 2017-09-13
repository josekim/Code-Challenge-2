// @flow
import React from 'react';

const Header = (props: { title: string, subtext: string }) => (
  <div>
    <h1 className="title-page"> {props.title}</h1>
    <h2 className="title-subtext">{props.subtext}</h2>
  </div>
);

export default Header;
