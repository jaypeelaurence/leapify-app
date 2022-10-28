/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
  label,
  icon,
  left,
  right,
  className,
  ...props
}) => (
  <button
    type="button"
    className={cn('btn', className)}
    {...props}
  >
    <div>
      { !left ? null : icon() }
      {label}
      { !right ? null : icon() }
    </div>
  </button>
);

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.sting),
  ]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  icon: PropTypes.instanceOf(Function),
};

Button.defaultProps = {
  onClick: () => null,
  type: 'button',
  className: null,
  disabled: null,
  left: null,
  right: null,
  icon: () => null,
};
