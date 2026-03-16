import React from 'react';

function StepSearch({ onSelect }) {
  return (
    <div className="card">
      <h2>Do you search on Google or the internet every day?</h2>
      <div className="button-group">
        <button onClick={() => onSelect('yes')}>Yes</button>
        <button onClick={() => onSelect('no')}>No</button>
      </div>
    </div>
  );
}

export default StepSearch;