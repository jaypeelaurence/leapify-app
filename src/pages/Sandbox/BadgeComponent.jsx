import React from 'react';

import { FaBell } from 'react-icons/fa';

import Badge, { BadgeIcon } from 'ui/components/Badge';

function BadgeComponent() {
  return (
    <div className="border rounded rounded-md p-4">
      <h1>Badge Component</h1>
      <div className="flex flex-col gap-y-2">
        <h4>BADGE</h4>
        <div className="flex gap-2">
          <Badge count={1} />
          <Badge count={10} />
          <Badge count={100} />
        </div>
        <h4>BADGE W/ ICON</h4>
        <div className="flex gap-2">
          <BadgeIcon count={0} icon={FaBell} />
          <BadgeIcon count={1} icon={FaBell} />
          <BadgeIcon count={10} icon={FaBell} />
          <BadgeIcon count={100} icon={FaBell} />
        </div>
      </div>
    </div>
  );
}

export default BadgeComponent;
