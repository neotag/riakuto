import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const Home: FC<{}> = () => {
  return (
    <div className="container">
      <Helmet>
        <title>TITLE: React Router sandbox - Temporary page</title>
      </Helmet>

      <header>
        <h1>React Router sandbox - Temporary page</h1>
      </header>
      <p>ただのサンプルぺーじ。</p>
    </div>
  );
};

export default Home;
