import React from 'react';

import ButtonComponent from './ButtonComponent';
import BadgeComponent from './BadgeComponent';

function Demo() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <ButtonComponent />
      <BadgeComponent />
    </div>
  );
}

export default Demo;
