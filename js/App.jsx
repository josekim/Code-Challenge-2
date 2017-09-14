// @flow

import React from 'react';
import Header from './Header';
import TableContainer from './TableContainer';

const title = 'Your Email Organized';
const subtext = "You can recategorize your senders or leave them in your inbox by unchecking the box next to the sender's name";

const App = () => (
  <div>
    <Header title={title} subtext={subtext} />
    <TableContainer />
  </div>
);

export default App;
