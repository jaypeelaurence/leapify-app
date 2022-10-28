import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Error from './Error';
import Demo from './demo';

function Public() {
  return (
    <Routes>
      <Route path="/demo" element={<Demo />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Public;
