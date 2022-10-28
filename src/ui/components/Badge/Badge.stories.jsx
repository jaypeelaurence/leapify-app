/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import { FaBell } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Badge, { BadgeIcon } from './Badge';
import 'assets/styles/styles.css';

export default {
  title: 'Components/Data Display/Badge',
  component: BadgeIcon,
  argTypes: {
    count: {
      defaultValue: 100,
      description: 'Number of counts on the Badge',
    },
    hasNotification: {
      defaultValue: true,
      description: 'Badge has notification',
      control: 'boolean',
    },
  },
  onClick: {
    action: 'clicked',
  },
};

const Template = ({ type, hasNotification, ...args }) => {

  if (type === 'badge') {
    return (<Badge {...args} />);
  }

  if (type === 'icon') {
    const props = { count: !hasNotification ? 0 : args.count };
    console.log(props);

    return (<BadgeIcon icon={FaBell} {...args} {...props} />);
  }

  return (<Badge {...args} />);
};

Template.propTypes = {
  type: PropTypes.string,
  hasNotification: PropTypes.bool,
};

Template.defaultProps = {
  type: 'badge',
  hasNotification: true,
};

const PARAMS = {
  controls: {
    exclude: [
      'type',
      'icon',
    ],
  },
};

export const Default = Template.bind({});

Default.args = {
  type: 'badge',
};

Default.parameters = PARAMS;

export const Icon = Template.bind({});

Icon.args = {
  type: 'icon',
};

Icon.parameters = PARAMS;
