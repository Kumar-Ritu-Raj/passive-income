import React, { useState } from 'react';
import './App.css';
import StepIntro from './components/StepIntro.jsx';
import StepOnlineOffline from './components/StepOnlineOffline.jsx';
import StepDevice from './components/StepDevice.jsx';
import StepSearch from './components/StepSearch.jsx';
import StepShopping from './components/StepShopping.jsx';
import ResultPage from './components/ResultPage.jsx';
import ProgressBar from './components/ProgressBar.jsx';

function App() {
  const [step, setStep] = useState('intro');
  const [answers, setAnswers] = useState({});

  const renderStep = () => {
    const showProgress = step >= 1 && step <= 4 && step !== 'offline';

    return (
      <div className="app-container">
        <h1 className="app-title">💰 Daily Passive Income</h1>
        <p className="app-subtitle">Answer a few simple questions and discover easy ways to earn extra cash every day.</p>
        {showProgress && <ProgressBar currentStep={step} totalSteps={4} />}
        <div className="step-container">
          {step === 'intro' ? (
            <StepIntro onSelect={(choice) => {
              if (choice === 'yes') {
                setStep(1);
              } else {
                setStep('not-interested');
              }
            }} />
          ) : step === 'not-interested' ? (
            <div className="message-card">
              <h2>That's okay! You can come back anytime to explore earning opportunities.</h2>
            </div>
          ) : step === 'offline' ? (
            <div className="message-card">
              <h2>Currently our earning methods are for online users.</h2>
            </div>
          ) : step === 1 ? (
            <StepOnlineOffline onSelect={(option) => {
              if (option === 'offline') {
                setStep('offline');
              } else {
                setAnswers({ ...answers, onlineOffline: option });
                setStep(2);
              }
            }} />
          ) : step === 2 ? (
            <StepDevice onSelect={(device) => {
              setAnswers({ ...answers, device });
              setStep(3);
            }} />
          ) : step === 3 ? (
            <StepSearch onSelect={(search) => {
              setAnswers({ ...answers, search });
              setStep(4);
            }} />
          ) : step === 4 ? (
            <StepShopping onSelect={(shopping) => {
              setAnswers({ ...answers, shopping });
              setStep('result');
            }} />
          ) : step === 'result' ? (
            <ResultPage answers={answers} />
          ) : null}
        </div>
      </div>
    );
  };

  const appStyle = {
    backgroundImage: `url('${process.env.PUBLIC_URL}/bgdailyincome.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="App" style={appStyle}>
      <div className="last-updated">Last Updated: 17th March</div>
      {renderStep()}
    </div>
  );
}

export default App;
