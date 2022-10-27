import React from 'react';

import { Routes, Route } from "react-router-dom";

import Error from './Error';

function Private({ children }) {
  return (
    <Routes>
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default Private;
