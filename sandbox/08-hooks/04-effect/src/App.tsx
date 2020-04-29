import React, { FC, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

import './App.css';

const App: FC = () => {
  const LIMIT = 60;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const reset = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  const tick = () => {};

  // componentDidMount = () => {
  //   this.timerId = setInterval(this.tick, 1000);
  // };

  // componentDidUpdate = () => {
  //   const { timeLeft } = this.state;
  //   if (timeLeft === 0) {
  //     this.reset();
  //   }
  // };

  // componentWillUnmount = () => {
  //   clearInterval(this.timerId as NodeJS.Timer);
  // };

  return (
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" fluid onClick={reset}>
            <Icon name="redo" />
            Reset
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default App;
