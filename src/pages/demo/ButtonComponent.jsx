import React from 'react';

import Button from 'ui/components';

function ButtonComponent() {
  return (
    <div className="border rounded rounded-md p-4">
      <h1 className="text-6xl font-bold">Button Component</h1>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-2">
          <Button label="BUTTON" className="primary lg" />
          <Button label="BUTTON" className="primary lg" disabled />
          <Button label="BUTTON" className="primary md" />
          <Button label="BUTTON" className="primary md" disabled />
          <Button label="BUTTON" className="primary sm" />
          <Button label="BUTTON" className="primary sm" disabled />
        </div>
        <div className="flex gap-2">
          <Button label="BUTTON" className="secondary lg" />
          <Button label="BUTTON" className="secondary lg" disabled />
          <Button label="BUTTON" className="secondary md" />
          <Button label="BUTTON" className="secondary md" disabled />
          <Button label="BUTTON" className="secondary sm" />
          <Button label="BUTTON" className="secondary sm" disabled />
        </div>
        <div className="flex gap-2">
          <Button label="BUTTON" className="tertiary lg" />
          <Button label="BUTTON" className="tertiary lg" disabled />
          <Button label="BUTTON" className="tertiary md" />
          <Button label="BUTTON" className="tertiary md" disabled />
          <Button label="BUTTON" className="tertiary sm" />
          <Button label="BUTTON" className="tertiary sm" disabled />
        </div>
        <div className="flex gap-2">
          <Button label="BUTTON" className="lg" />
          <Button label="BUTTON" className="lg" disabled />
          <Button label="BUTTON" className="md" />
          <Button label="BUTTON" className="md" disabled />
          <Button label="BUTTON" className="sm" />
          <Button label="BUTTON" className="sm" disabled />
        </div>
        <div className="flex gap-2">
          <Button label="BUTTON" className="link lg" />
          <Button label="BUTTON" className="link lg" disabled />
          <Button label="BUTTON" className="link md" />
          <Button label="BUTTON" className="link md" disabled />
          <Button label="BUTTON" className="link sm" />
          <Button label="BUTTON" className="link sm" disabled />
        </div>
      </div>
    </div>
  );
}

export default ButtonComponent;
