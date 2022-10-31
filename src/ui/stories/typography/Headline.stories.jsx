/* eslint-disable no-underscore-dangle, react/jsx-pascal-case, react/jsx-props-no-spreading */

import React from 'react';

import PropTypes from 'prop-types';

import 'assets/styles/styles.css';

function _Headlines({ tag, label, fontWeight }) {
  const weight = `font-${fontWeight}`;

  if (tag === 'h2') {
    return (<h2 className={weight}>{label}</h2>);
  }

  if (tag === 'h3') {
    return (<h3 className={weight}>{label}</h3>);
  }

  if (tag === 'h4') {
    return (<h4 className={weight}>{label}</h4>);
  }

  return (<h1 className={weight}>{label}</h1>);
}

_Headlines.propTypes = {
  tag: PropTypes.string,
  label: PropTypes.string,
  fontWeight: PropTypes.string,
};

_Headlines.defaultProps = {
  tag: 'h1',
  label: 'Hello',
  fontWeight: 'semibold',
};

export default {
  title: 'Primitive/Typography/Headline',
  component: _Headlines,
  argTypes: {
    tag: {
      title: 'Tag',
      defaultValue: 'h1',
      description: 'Tag Type of headline',
      control: 'radio',
      options: ['h1', 'h2', 'h3'],
    },
    fontWeight: {
      title: 'Font Weight',
      defaultValue: 'semibold',
      description: 'Font weight of the headline',
      control: 'radio',
      options: ['thin', 'light', 'normal', 'semibold', 'bold', 'black'],
    },
  },
};

const Template = (args) => (<_Headlines {...args} />);

Template.propTypes = {
  tag: PropTypes.string,
  label: PropTypes.string,
  fontWeight: PropTypes.string,
};

Template.defaultProps = {
  tag: 'h1',
  label: 'Hello',
  fontWeight: 'semibold',
};

export const Default = Template.bind({});
