import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { parse } from 'query-string';

type TempProps = {} & RouteComponentProps<{ code: string }>;

const Temp: FC<TempProps> = ({ location, match }) => {
  const { code } = match.params;
  const { s } = parse(location.search);
  // eslint-disable-next-line no-console
  console.log(code);

  return (
    <div className="container">
      <Helmet>
        <title>TITLE: React Router sandbox - Temporary page</title>
      </Helmet>

      <header>
        <h1>React Router sandbox - {code} page</h1>
        {s ? `query: ${s}` : ''}
      </header>
      <p>ただのサンプルぺーじ。</p>
      <Link to="/">とっぷぺーじへもどる</Link>
    </div>
  );
};

export default withRouter(Temp);
