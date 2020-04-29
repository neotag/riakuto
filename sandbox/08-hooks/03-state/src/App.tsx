/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

import './App.css';

const App: FC = () => {
  const count = 0;
  const increment = () => {};
  const decrement = () => {};

  //  increment() {
  //  this.setState(prevState => ({
  //    count: prevState.count + 1,
  //  }));
  //  }

  //  decrement() {
  //  this.setState(prevState => ({
  //    count: prevState.count - 1,
  //  }));
  //  }

  return (
    <div className="container">
      <header>
        <h1>カウンター</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>count</Statistic.Label>
          <Statistic.Value>{count}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" onClick={decrement}>
              -1
            </Button>
            <Button color="green" onClick={increment}>
              +1
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default App;
