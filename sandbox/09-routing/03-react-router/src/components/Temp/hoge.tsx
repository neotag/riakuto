import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const Hoge: FC<{}> = () => {
  return (
    <div className="container">
      <Helmet>
        <title>hoge</title>
      </Helmet>

      <header>
        <h1>hoge</h1>
      </header>
      <p>ただのサンプルぺーじ。</p>
    </div>
  );
};

export default Hoge;
