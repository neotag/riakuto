import React, { FC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

export interface DefaultProps {
  timeLeft?: number;
  reset?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Timer: FC<DefaultProps> = props => {
  // eslint-disable-next-line no-alert
  const { timeLeft = 777, reset = () => alert('not defined') } = props;

  return (
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
  );
};

export default Timer;
