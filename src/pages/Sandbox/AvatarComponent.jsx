import React from 'react';

import users from 'data/users.json';
import Avatar, { AvatarGroup } from 'ui/components/Avatar';

function AvatarComponent() {
  return (
    <div className="card">
      <h1>Avatar Component</h1>
      <div className="flex gap-12">
        <div className="grid grid-cols-4 gap-2">
          <div />
          <h4>ICON</h4>
          <h4>NAME</h4>
          <h4>PROFILE</h4>
          <h4>LARGE</h4>
          <Avatar user={users[0]} className="lg" />
          <Avatar user={users[0]} className="lg" name />
          <Avatar user={users[0]} className="lg" profile />
          <h4>MEDIUM</h4>
          <Avatar user={users[0]} className="md" />
          <Avatar user={users[0]} className="md" name />
          <Avatar user={users[0]} className="md" profile />
          <h4>SMALL</h4>
          <Avatar user={users[0]} className="sm" />
          <Avatar user={users[0]} className="sm" name />
          <Avatar user={users[0]} className="sm" profile />
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>GROUP MEDIUM</h4>
          <div className="flex gap-2">
            <AvatarGroup users={users} className="md" />
          </div>
          <h4>GROUP SMALL</h4>
          <div className="flex gap-2">
            <AvatarGroup users={users} className="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarComponent;
