import React, { FC } from 'react';
import Timer, { DefaultProps as ITimerProps } from './Timer';

const TimerPage: FC<ITimerProps> = props => {
  const { timeLeft, reset } = props;

  return (
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Timer timeLeft={timeLeft} reset={reset} />
    </div>
  );
};

export default TimerPage;
