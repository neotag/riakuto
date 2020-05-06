/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

export interface CounterProps {
  count: number;
  add?: (amount: number) => void;
  increment: () => void;
  decrement: () => void;
}

const Counter: FC<CounterProps> = ({
  count = 0,
  add = () => {},
  increment = () => {},
  decrement = () => {},
}) => (
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
          <Button color="red" onClick={() => decrement()}>
            -1
          </Button>
          <Button color="green" onClick={() => increment()}>
            +1
          </Button>
        </div>
        <div className="ui buttons">
          <Button color="green" onClick={() => add(10)}>
            +10
          </Button>
        </div>
      </Card.Content>
    </Card>
  </div>
);

export default Counter;
