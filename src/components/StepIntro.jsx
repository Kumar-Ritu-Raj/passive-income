import React from 'react';

function StepIntro({ onSelect }) {
  return (
    <div className="card">
      <h2>Are you willing to start earning side by side your regular work?</h2>
      <div className="button-group">
        <button onClick={() => onSelect('yes')}>Yes</button>
        <button onClick={() => onSelect('no')}>No</button>
      </div>
    </div>
  );
}

export default StepIntro;