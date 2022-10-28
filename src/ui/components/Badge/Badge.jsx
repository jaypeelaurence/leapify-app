import React, { useMemo } from 'react';

import PropTypes from 'prop-types';

function Badge({ count }) {
  const renderCount = useMemo(() => (count > 99 ? 99 : count), [count]);

  return (
    <div className="badge">
      <div>
        {renderCount}
      </div>
    </div>
  );
}

export default Badge;

Badge.propTypes = {
  count: PropTypes.number,
};

Badge.defaultProps = {
  count: 0,
};

export const BadgeIcon = ({ count, icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="badgeIcon"
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
  onClick: PropTypes.instanceOf(Function).isRequired,
};

BadgeIcon.defaultProps = {
  count: 0,
};

export const BadgeAvatar = ({ count, icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="badgeIcon"
  >
    <div className="icon">
      {icon()}
    </div>
    {Boolean(count) && <Badge count={count} />}
  </button>
);

BadgeAvatar.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.instanceOf(Function).isRequired,
};

BadgeAvatar.defaultProps = {
  count: 0,
};
