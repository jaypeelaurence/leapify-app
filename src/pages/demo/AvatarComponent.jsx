import React from 'react';

import Avatar, { AvatarGroup } from 'ui/components/Avatar';
import users from 'data/users.json';

function AvatarComponent() {
  return (
    <div className="border rounded rounded-md p-4">
      <h1 className="text-6xl font-bold">Avatar Component</h1>
      <div className="flex gap-12">
        <div className="grid grid-cols-4 gap-2">
          <div />
          <h1 className="text-md font-bold">ICON</h1>
          <h1 className="text-md font-bold">NAME</h1>
          <h1 className="text-md font-bold">PROFILE</h1>
          <div className="flex items-center text-md font-bold">LARGE</div>
          <Avatar user={users[0]} className="lg" />
          <Avatar user={users[0]} className="lg" name />
          <Avatar user={users[0]} className="lg" profile />
          <div className="flex items-center text-md font-bold">MEDIUM</div>
          <Avatar user={users[0]} className="md" />
          <Avatar user={users[0]} className="md" name />
          <Avatar user={users[0]} className="md" profile />
          <div className="flex items-center text-md font-bold">SMALL</div>
          <Avatar user={users[0]} className="sm" />
          <Avatar user={users[0]} className="sm" name />
          <Avatar user={users[0]} className="sm" profile />
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-md font-bold">GROUP MEDIUM</h1>
          <div className="flex gap-2">
            <AvatarGroup users={users} className="md" />
          </div>
          <h1 className="text-md font-bold">GROUP SMALL</h1>
          <div className="flex gap-2">
            <AvatarGroup users={users} className="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarComponent;
