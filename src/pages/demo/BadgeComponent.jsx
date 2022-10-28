import React from 'react';

import { Badge } from 'ui/components';

function BadgeComponent() {
  return (
    <div className="border rounded rounded-md p-4">
      <h1 className="text-6xl font-bold">Badge Component</h1>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-2">
          <Badge count={1} />
          <Badge count={10} />
          <Badge count={25} />
          <Badge count={80} />
          <Badge count={100} />
        </div>
      </div>
    </div>
  );
}

export default BadgeComponent;
