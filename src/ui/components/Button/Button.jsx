/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

function Button({
  label,
  icon,
  iconLeft,
  iconRight,
  className,
  ...props
}) {
  return (
    <button
      type="button"
      className={cn('btn', className)}
      {...props}
    >
      <div>
        { !iconLeft ? null : icon() }
        {label}
        { !iconRight ? null : icon() }
      </div>
    </button>
  );
}

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
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  icon: PropTypes.instanceOf(Function),
};

Button.defaultProps = {
  onClick: () => null,
  type: 'button',
  className: null,
  disabled: false,
  iconLeft: false,
  iconRight: false,
  icon: () => null,
};
