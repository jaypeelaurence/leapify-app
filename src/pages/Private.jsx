import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Error from './Error';

function Private() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Private;
