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
  count: 1,
};
