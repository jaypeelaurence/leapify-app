/* eslint-disable no-underscore-dangle, react/jsx-pascal-case, react/jsx-props-no-spreading */

import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import 'assets/styles/styles.css';

const _Shadow = ({ type }) => (<div className={cn(['w-[400px]', 'h-[200px]'], type)} />);

_Shadow.propTypes = {
  type: PropTypes.string,
};

_Shadow.defaultProps = { type: 'Medium' };

export default {
  title: 'Primitive/Shadow',
  component: _Shadow,
  argTypes: {
    type: {
      title: 'type',
      defaultValue: 'Medium',
      description: 'Type of the shadow',
      control: 'radio',
      options: ['Large', 'Medium', 'Small'],
      mapping: {
        Large: 'modal',
        Medium: 'popup',
        Small: 'card',
      },
    },
  },
};

const Template = (args) => (<_Shadow {...args} />);

export const Default = Template.bind({});
