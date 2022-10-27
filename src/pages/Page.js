import React from 'react';

import Private from './Private';
import Public from './Public';

function Page() {
  const isAuthenticated = false;

  return (isAuthenticated ? <Private /> : <Public />);
}

export default Page;
