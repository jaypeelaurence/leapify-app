/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import cn from 'classnames';
import { BsPlus } from 'react-icons/bs';
import PropTypes from 'prop-types';

import Button from './Button';
import 'assets/styles/styles.css';

export default {
  title: 'Components/General/Button',
  component: Button,
  argTypes: {
    label: {
      defaultValue: 'BUTTON',
      description: 'Label of the Button',
    },
    disabled: {
      defaultValue: false,
      description: 'Disable toggle of the Button',
    },
    size: {
      title: 'Size',
      defaultValue: 'Medium',
      description: 'Size of the Button',
      control: 'radio',
      options: ['Large', 'Medium', 'Small'],
      mapping: {
        Large: 'lg',
        Medium: 'md',
        Small: 'sm',
      },
    },
    hasIcon: {
      title: 'Has Icon',
      defaultValue: false,
      description: 'Button has Icon',
      control: 'boolean',
    },
    iconDirection: {
      title: 'Icon Direction',
      defaultValue: 'Left',
      description: 'Direction of Icon in the Button',
      options: ['Left', 'Right'],
      control: { type: 'radio' },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

function Template({
  type,
  size,
  hasIcon,
  iconDirection,
  ...args
}) {
  const props = {
    icon: BsPlus,
    iconLeft: iconDirection === 'Left' ? hasIcon : false,
    iconRight: iconDirection === 'Right' ? hasIcon : false,
  };

  return (
    <Button
      className={cn(
        type,
        size,
      )}
      {...props}
      {...args}
    />
  );
}

Template.propTypes = {
  type: PropTypes.string,
  size: PropTypes.bool,
  hasIcon: PropTypes.bool,
  iconDirection: PropTypes.string,
};

Template.defaultProps = {
  type: 'primary',
  size: 'md',
  hasIcon: true,
  iconDirection: 'Left',
};

const ARGS = {
  label: 'BUTTON',
};

const PARAMS = {
  controls: {
    exclude: [
      'className',
      'iconRight',
      'iconLeft',
      'type',
      'variant',
      'icon',
    ],
  },
};

export const Primary = Template.bind({});

Primary.args = {
  ...ARGS,
  type: 'primary',
};

Primary.parameters = PARAMS;

export const Secondary = Template.bind({});

Secondary.args = {
  ...ARGS,
  type: 'secondary',
};

Secondary.parameters = PARAMS;

export const Tertiary = Template.bind({});

Tertiary.args = {
  ...ARGS,
  type: 'tertiary',
};

Tertiary.parameters = PARAMS;

export const Text = Template.bind({});

Text.args = {
  ...ARGS,
  type: null,
};

Text.parameters = PARAMS;

export const Link = Template.bind({});

Link.args = {
  ...ARGS,
  type: 'link',
};

Link.parameters = PARAMS;
