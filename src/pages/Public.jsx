import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Error from './Error';
import Sandbox from './Sandbox';

function Public() {
  return (
    <Routes>
      <Route path="/sandbox" element={<Sandbox />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Public;
