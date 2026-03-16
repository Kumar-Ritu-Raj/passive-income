import React from 'react';

function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div style={{ width: '100%', marginBottom: '20px' }}>
      <div style={{
        width: '100%',
        height: '10px',
        backgroundColor: '#e0e0e0',
        borderRadius: '5px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#4CAF50',
          transition: 'width 0.3s ease'
        }}></div>
      </div>
      <p style={{ textAlign: 'center', margin: '5px 0', fontSize: '14px' }}>
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}

export default ProgressBar;