/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import PropTypes from 'prop-types';

import users from 'data/users.json';

import Avatar, { AvatarGroup } from './Avatar';
import 'assets/styles/styles.css';

export default {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  argTypes: {
    type: {
      defaultValue: 'Icon',
      description: 'Avatar type',
      control: 'radio',
      options: ['Icon', 'Profile', 'Name'],
      mapping: {
        Icon: 'icon',
        Profile: 'profile',
        Name: 'name',
      },
    },
    size: {
      defaultValue: 'Medium',
      description: 'Avatar size',
      control: 'radio',
      options: ['Large', 'Medium', 'Small'],
      mapping: {
        Large: 'lg',
        Medium: 'md',
        Small: 'sm',
      },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

const Template = ({
  type,
  size,
  isGrouped,
  ...args
}) => {
  if (isGrouped) {
    return (<AvatarGroup users={users} className={size} {...args} />);
  }

  if (type === 'name') {
    return (<Avatar user={users[1]} className={size} name {...args} />);
  }

  if (type === 'profile') {
    return (<Avatar user={users[1]} className={size} profile {...args} />);
  }

  if (type === 'icon') {
    return (<Avatar user={users[1]} className={size} icon {...args} />);
  }

  return (<Avatar user={users[1]} className={size} icon {...args} />);
};

Template.defaultProps = {
  type: 'Icon',
  size: 'Medium',
  isGrouped: false,
};

Template.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  isGrouped: PropTypes.bool,
};

const PARAMS = {
  controls: {
    exclude: [
      'user',
      'icon',
      'name',
      'profile',
      'className',
      'isGrouped',
    ],
  },
};

export const Default = Template.bind({});

Default.args = {
  isGrouped: false,
};

Default.parameters = PARAMS;

export const Grouped = Template.bind({});

Grouped.args = {
  isGrouped: true,
};

Grouped.parameters = {
  ...PARAMS,
  controls: {
    ...PARAMS.controls,
    exclude: [
      ...PARAMS.controls.exclude,
      'type',
    ],
  },
};
