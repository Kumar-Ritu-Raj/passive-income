import React from 'react';

function StepOnlineOffline({ onSelect }) {
  return (
    <div className="card">
      <h2>Are you mostly an Online Person or an Offline Person?</h2>
      <div className="button-group">
        <button onClick={() => onSelect('online')}>Online Person</button>
        <button onClick={() => onSelect('offline')}>Offline Person</button>
      </div>
    </div>
  );
}

export default StepOnlineOffline;