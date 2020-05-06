/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import Counter from './components/Counter';
import ColorfulBeads from './components/ColorfulBeads';

import './App.css';

const CounterTempProps = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

const App: FC = () => {
  const { count, increment, decrement } = CounterTempProps;

  return (
    <div>
      <Counter count={count} increment={increment} decrement={decrement} />
      <ColorfulBeads />
    </div>
  );
};

export default App;
