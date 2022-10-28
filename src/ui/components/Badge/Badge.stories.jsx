/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import { FaBell } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { BadgeIcon } from './Badge';
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

const Template = ({ hasNotification, ...args }) => {
  const props = { count: !hasNotification ? 0 : args.count };

  return (
    <BadgeIcon icon={FaBell} {...args} {...props} />
  );
};

Template.propTypes = {
  hasNotification: PropTypes.bool,
};

Template.defaultProps = {
  hasNotification: true,
};

export const Default = Template.bind({});

Default.parameters = {
  controls: {
    exclude: [
      'icon',
    ],
  },
};
