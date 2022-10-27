import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import Page from './pages';

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Page />
      </QueryParamProvider>
    </Router>
  );
}

export default App;
