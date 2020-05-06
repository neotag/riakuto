import React, { useEffect, FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
// import CharacterList, { Character } from './CharacterList';
import Home from './components/Home';
import Temp from './components/Temp';
import Hoge from './components/Temp/hoge';

import './App.css';

import { schoolData } from './data';

const App: FC<{}> = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.dir(schoolData);
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route path="/hoge" component={Hoge} />
        <Route path="/temp/:code" component={Temp} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
