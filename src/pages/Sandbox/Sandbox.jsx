import React from 'react';

import ButtonComponent from './ButtonComponent';
import BadgeComponent from './BadgeComponent';
import AvatarComponent from './AvatarComponent';

function Sandbox() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <ButtonComponent />
      <div className="flex gap-4">
        <BadgeComponent />
        <AvatarComponent />
      </div>
    </div>
  );
}

export default Sandbox;
