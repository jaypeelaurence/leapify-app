/* eslint-disable react/jsx-props-no-spreading */

import React, { useMemo } from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import { AiOutlineUser } from 'react-icons/ai';
import { BsPlus } from 'react-icons/bs';

function Avatar({
  user,
  className,
  icon,
  name,
  profile,
  ...props
}) {
  const usr = useMemo(() => {
    const {
      fullName,
      firstName,
      lastName,
      photoUrl,
    } = user;

    if (icon) {
      return (<AiOutlineUser />);
    }

    if (name) {
      const str = fullName ?? lastName ?? firstName;

      return str[0];
    }

    if (profile) {
      return (<img src={photoUrl} alt={photoUrl} />);
    }

    return (<AiOutlineUser />);
  }, [user, icon, name, profile]);

  return (
    <button
      type="button"
      className={cn('avatar', className)}
      {...props}
    >
      {usr}
    </button>
  );
}

export default Avatar;

Avatar.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photoUrl: urlPropType,
  }),
  icon: PropTypes.bool,
  name: PropTypes.bool,
  profile: PropTypes.bool,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  user: {
    fullName: null,
    firstName: null,
    lastName: null,
    photoUrl: null,
  },
  icon: null,
  name: null,
  profile: null,
  className: null,
};

function AvatarDetails({ user, index }) {
  const {
    fullName,
    firstName,
    lastName,
    photoUrl,
  } = user;

  if (index === 0) {
    return (<Avatar user={user} name />);
  }

  if (photoUrl) {
    return (<Avatar user={user} profile />);
  }

  const name = fullName ?? lastName ?? firstName;

  if (name && name[0]) {
    return (<Avatar user={user} name />);
  }

  return (<Avatar user={user} icon />);
}

AvatarDetails.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photoUrl: urlPropType,
  }),
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

AvatarDetails.defaultProps = {
  user: {
    fullName: null,
    firstName: null,
    lastName: null,
    photoUrl: null,
  },
};

export const AvatarGroup = ({ users, className }) => {
  const remaining = useMemo(() => {
    const rem = users.length - 3;

    return !(rem > 0) ? null : (
      <div
        className={cn(
          ['avatar', 'bg-disabled', 'text-blue', 'flex', 'items-center'],
          className,
        )}
      >
        <div className="flex items-center">
          <BsPlus className="m-0" />
          {rem}
        </div>
      </div>
    );
  }, [users, className]);

  return (
    <div
      className={cn('avatarGroup', className)}
    >
      {
        users
          .slice(0, 3)
          .map((user, key) => (
            <AvatarDetails user={user} key={user?.id} index={key} />
          ))
      }
      { remaining }
    </div>
  );
};

AvatarGroup.propTypes = {
  users: PropTypes.arrayOf({
    fullName: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photoUrl: urlPropType,
  }),
  className: PropTypes.string,
};

AvatarGroup.defaultProps = {
  users: [],
  className: null,
};
