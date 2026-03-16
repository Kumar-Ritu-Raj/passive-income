import React from 'react';

function StepDevice({ onSelect }) {
  return (
    <div className="card">
      <h2>Do you usually use a Laptop or a Smartphone?</h2>
      <div className="button-group">
        <button onClick={() => onSelect('laptop')}>Laptop</button>
        <button onClick={() => onSelect('smartphone')}>Smartphone</button>
        <button onClick={() => onSelect('both')}>Both</button>
      </div>
    </div>
  );
}

export default StepDevice;