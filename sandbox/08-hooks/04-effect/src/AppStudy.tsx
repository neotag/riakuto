import React, { Component } from 'react';
import TimerPage from './TimerPage';

import './App.css';

const LIMIT = 60;

interface AppState {
  timeLeft: number;
}

class App extends Component<{}, AppState> {
  timerId?: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    this.state = { timeLeft: LIMIT };
  }

  // componentDidMount で setInterval
  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  // componentDidUpdate で時間を確認して 0 になっていたら LIMIT に戻す
  componentDidUpdate() {
    const { timeLeft } = this.state;
    if (timeLeft === 0) {
      this.reset();
    }
  }

  // componentWillUnmount で clearInterval
  componentWillUnmount() {
    clearInterval(this.timerId as NodeJS.Timer);
  }

  // reset で this.state.timeLeft に LIMIT を代入
  reset = () => {
    this.setState(() => ({ timeLeft: LIMIT }));
  };

  // tick で this.state.timeLeft を減算（1秒経過）
  tick = () => {
    this.setState(prev => ({ timeLeft: prev.timeLeft - 1 }));
  };

  render() {
    const { timeLeft } = this.state;

    return (
      <>
        <TimerPage timeLeft={timeLeft} reset={this.reset} />
      </>
    );
  }
}

export default App;
