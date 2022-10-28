/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import Badge from './Badge';
import 'assets/styles/styles.css';

export default {
  title: 'Components/Data Display/Badge',
  component: Badge,
  argTypes: {
    count: {
      defaultValue: 0,
      description: 'Number of counts on the Badge',
    },
  }
};

function Template({ ...args }) {
  return (
    <Badge {...args} />
  );
}

export const Default = Template.bind({});
