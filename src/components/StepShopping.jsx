import React from 'react';

function StepShopping({ onSelect }) {
  return (
    <div className="card">
      <h2>Do you shop online?</h2>
      <div className="button-group">
        <button onClick={() => onSelect('yes')}>Yes</button>
        <button onClick={() => onSelect('no')}>No</button>
      </div>
    </div>
  );
}

export default StepShopping;