import React from 'react';

function ProgressBar({ currentStep, totalSteps }) {
  const progress = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));

  return (
    <div className="progress-bar">
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="progress-bar__label">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}

export default ProgressBar;