import React, { useEffect } from 'react';
import CharacterList, { Character } from './CharacterList';

import './App.css';

import { schoolData } from './data';

const App = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.dir(schoolData);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>はねバド！ キャラクター一覧</h1>
      </header>
      <CharacterList
        school="北小町高校"
        characters={schoolData.kitakomachi.students}
      />
    </div>
  );
};

export default App;
