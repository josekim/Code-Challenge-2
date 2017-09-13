// @flow

import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Table from './Table';

const title = 'Your Email Organized';
const subtext = "You can recategorize your senders or leave them in your inbox by unchecking the box next to the sender's name";

const App = () => (
  <div>
    <Header title={title} subtext={subtext} />
    <Table />
    <Button />
  </div>
);

export default App;
