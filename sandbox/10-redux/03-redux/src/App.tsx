/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import Counter from './containers/Counter';
import ColorfulBeads from './containers/ColorfulBeads';

import './App.css';

const App: FC = () => {
  return (
    <div>
      <Counter />
      <ColorfulBeads />
    </div>
  );
};

export default App;
