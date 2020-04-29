import React, { FC, useState, useEffect } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

import './App.css';

const App: FC = () => {
  const LIMIT = 60;
  const [timeLeft, setTimeLeft] = useState(LIMIT);
  const reset = () => setTimeLeft(LIMIT);

  useEffect(() => {
    const tick = () => {
      setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
    };
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  });

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
