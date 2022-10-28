import React from 'react';

import { FaBell } from 'react-icons/fa';

import Badge, { BadgeIcon } from 'ui/components/Badge/Badge';

function BadgeComponent() {
  return (
    <div className="border rounded rounded-md p-4">
      <h1 className="text-6xl font-bold">Badge Component</h1>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-md font-bold">BADGE</h1>
        <div className="flex gap-2">
          <Badge count={1} />
          <Badge count={10} />
          <Badge count={100} />
        </div>
        <h1 className="text-md font-bold">BADGE W/ ICON</h1>
        <div className="flex gap-2">
          <BadgeIcon count={0} icon={FaBell} onClick={() => null} />
          <BadgeIcon count={1} icon={FaBell} onClick={() => null} />
          <BadgeIcon count={10} icon={FaBell} onClick={() => null} />
          <BadgeIcon count={100} icon={FaBell} onClick={() => null} />
        </div>
      </div>
    </div>
  );
}

export default BadgeComponent;
