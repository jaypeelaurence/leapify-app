import React from 'react';

import { BsPlus } from 'react-icons/bs';

import { Button } from 'ui/components';

function ButtonComponent() {
  return (
    <div className="border rounded rounded-md p-4">
      <h1 className="text-6xl font-bold">Button Component</h1>
      <div className="flex gap-x-2">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-md font-bold">PRIMARY</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="primary lg" />
            <Button label="BUTTON" className="primary lg" disabled />
            <Button label="BUTTON" className="primary md" />
            <Button label="BUTTON" className="primary md" disabled />
            <Button label="BUTTON" className="primary sm" />
            <Button label="BUTTON" className="primary sm" disabled />
          </div>
          <h1 className="text-md font-bold">SECONDARY</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="secondary lg" />
            <Button label="BUTTON" className="secondary lg" disabled />
            <Button label="BUTTON" className="secondary md" />
            <Button label="BUTTON" className="secondary md" disabled />
            <Button label="BUTTON" className="secondary sm" />
            <Button label="BUTTON" className="secondary sm" disabled />
          </div>
          <h1 className="text-md font-bold">TERTIARY</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="tertiary lg" />
            <Button label="BUTTON" className="tertiary lg" disabled />
            <Button label="BUTTON" className="tertiary md" />
            <Button label="BUTTON" className="tertiary md" disabled />
            <Button label="BUTTON" className="tertiary sm" />
            <Button label="BUTTON" className="tertiary sm" disabled />
          </div>
          <h1 className="text-md font-bold">TEXT</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="lg" />
            <Button label="BUTTON" className="lg" disabled />
            <Button label="BUTTON" className="md" />
            <Button label="BUTTON" className="md" disabled />
            <Button label="BUTTON" className="sm" />
            <Button label="BUTTON" className="sm" disabled />
          </div>
          <h1 className="text-md font-bold">LINK</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="link lg" />
            <Button label="BUTTON" className="link lg" disabled />
            <Button label="BUTTON" className="link md" />
            <Button label="BUTTON" className="link md" disabled />
            <Button label="BUTTON" className="link sm" />
            <Button label="BUTTON" className="link sm" disabled />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-md font-bold">PRIMARY W/ ICON</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="primary lg" icon={BsPlus} left />
            <Button label="BUTTON" className="primary lg" disabled icon={BsPlus} left />
            <Button label="BUTTON" className="primary md" icon={BsPlus} right />
            <Button label="BUTTON" className="primary md" disabled icon={BsPlus} right />
            <Button label="BUTTON" className="primary sm" />
            <Button label="BUTTON" className="primary sm" disabled />
          </div>
          <h1 className="text-md font-bold">SECONDARY W/ ICON</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="secondary lg" icon={BsPlus} left />
            <Button label="BUTTON" className="secondary lg" disabled icon={BsPlus} left />
            <Button label="BUTTON" className="secondary md" icon={BsPlus} right />
            <Button label="BUTTON" className="secondary md" disabled icon={BsPlus} right />
            <Button label="BUTTON" className="secondary sm" />
            <Button label="BUTTON" className="secondary sm" disabled />
          </div>
          <h1 className="text-md font-bold">TERTIARY W/ ICON</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="tertiary lg" icon={BsPlus} left />
            <Button label="BUTTON" className="tertiary lg" disabled icon={BsPlus} left />
            <Button label="BUTTON" className="tertiary md" icon={BsPlus} right />
            <Button label="BUTTON" className="tertiary md" disabled icon={BsPlus} right />
            <Button label="BUTTON" className="tertiary sm" />
            <Button label="BUTTON" className="tertiary sm" disabled />
          </div>
          <h1 className="text-md font-bold">TEXT W/ ICON</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="lg" icon={BsPlus} left />
            <Button label="BUTTON" className="lg" disabled icon={BsPlus} left />
            <Button label="BUTTON" className="md" icon={BsPlus} right />
            <Button label="BUTTON" className="md" disabled icon={BsPlus} right />
            <Button label="BUTTON" className="sm" />
            <Button label="BUTTON" className="sm" disabled />
          </div>
          <h1 className="text-md font-bold">LINK W/ ICON</h1>
          <div className="flex gap-2">
            <Button label="BUTTON" className="link lg" icon={BsPlus} left />
            <Button label="BUTTON" className="link lg" disabled icon={BsPlus} left />
            <Button label="BUTTON" className="link md" icon={BsPlus} right />
            <Button label="BUTTON" className="link md" disabled icon={BsPlus} right />
            <Button label="BUTTON" className="link sm" />
            <Button label="BUTTON" className="link sm" disabled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonComponent;
