/* eslint-disable */

import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import 'assets/styles/styles.css';

function _Content({ type, label, fontWeight }) {
  return (
    <p className={cn('content', type)}>
      {label}
    </p>
  );
}

_Content.propTypes = {
  tag: PropTypes.string,
  label: PropTypes.string,
  fontWeight: PropTypes.string,
};

_Content.defaultProps = {
  label: 'Hello',
  fontWeight: 'normal',
};

export default {
  title: 'Primitive/Typography/Content',
  component: _Content,
  argTypes: {
    type: {
      title: 'Type',
      defaultValue: 'Body',
      description: 'Tag Type of content',
      control: 'radio',
      options: ['Title', 'Subtitle', 'Body', 'Footnote'],
      mapping: {
        Title: 'title',
        Subtitle: 'subtitle',
        Body: 'body',
        Footnote: 'footnote',
      },
    },
    fontWeight: {
      title: 'Font Weight',
      defaultValue: 'normal',
      description: 'Font weight of the content',
      control: 'radio',
      options: ['thin', 'light', 'normal', 'semibold', 'bold', 'black'],
    },
  },
};

const Template = ({
  ...args
}) => (<_Content {...args} />);

Template.propTypes = {
  label: PropTypes.string,
  fontWeight: PropTypes.string,
};

Template.defaultProps = {
  label: 'Hello',
  fontWeight: 'normal',
};

export const Default = Template.bind({});
