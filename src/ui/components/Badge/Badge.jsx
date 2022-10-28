/* eslint-disable react/jsx-props-no-spreading */

import React, { useMemo } from 'react';

import PropTypes from 'prop-types';

const Badge = ({ count }) => {
  const renderCount = useMemo(() => (count > 99 ? 99 : count), [count]);

  return (
    <div className="badge">
      <div>
        {renderCount}
      </div>
    </div>
  );
};

export default Badge;

Badge.propTypes = {
  count: PropTypes.number,
};

Badge.defaultProps = {
  count: null,
};

export const BadgeIcon = ({ count, icon, ...props }) => (
  <button
    type="button"
    className="badgeIcon"
    {...props}
  >
    <div className="icon">
      {icon()}
    </div>
    {Boolean(count) && <Badge count={count} />}
  </button>
);

BadgeIcon.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.instanceOf(Object).isRequired,
};

BadgeIcon.defaultProps = {
  count: null,
};
