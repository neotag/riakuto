import React, { FC } from 'react';
import CharacterList from '../../CharacterList';

import '../../App.css';

import { schoolData } from '../../data';

const Home: FC<{}> = () => {
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

export default Home;
