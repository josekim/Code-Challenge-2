// @flow

import React from 'react';
import Header from './Header';
import Table from './Table';

const title = 'Your Email Organized';
const subtext = "You can recategorize your senders or leave them in your inbox by unchecking the box next to the sender's name";

const App = () => (
  <div>
    <Header title={title} subtext={subtext} />
    <Table />
  </div>
);

export default App;
