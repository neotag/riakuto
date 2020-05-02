import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import CharacterList from '../../CharacterList';

import '../../App.css';

import { schoolData } from '../../data';

const Home: FC<{}> = () => {
  const code = 'kitakomachi';

  return (
    <div className="container">
      <header>
        <h1>はねバド！ キャラクター一覧</h1>
      </header>
      <Link to={`/temp/${code}`}>temp</Link>
      <CharacterList
        school="北小町高校"
        characters={schoolData.kitakomachi.students}
      />
    </div>
  );
};

export default Home;
