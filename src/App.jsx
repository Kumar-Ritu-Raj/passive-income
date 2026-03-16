import React, { useState } from 'react';
import './App.css';
import { earningOptions } from './data/earningOptions.js';
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
  const [matchedOfferIds, setMatchedOfferIds] = useState([]);
  const [score, setScore] = useState(0);

  const calculateMatches = (currentAnswers) => {
    if (!currentAnswers.onlineOffline) return [];

    return earningOptions
      .filter((option) => {
        const { criteria } = option;

        if (criteria.online && currentAnswers.onlineOffline !== 'online') {
          return false;
        }
        if (criteria.device && !criteria.device.includes(currentAnswers.device)) {
          return false;
        }
        if (criteria.search && currentAnswers.search !== criteria.search) {
          return false;
        }
        if (criteria.shopping && currentAnswers.shopping !== criteria.shopping) {
          return false;
        }

        return true;
      })
      .map((option) => option.id);
  };

  const renderStep = () => {
    const showProgress = step >= 1 && step <= 4 && step !== 'offline';

    return (
      <div className="app-container">
        <h1 className="app-title">💰 Daily Passive Income</h1>
        {step !== 'result' && (
          <p className="app-subtitle">Answer a few simple questions and discover easy ways to earn extra cash every day.</p>
        )}
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
              const updatedAnswers = { ...answers, shopping };
              setAnswers(updatedAnswers);

              const matches = calculateMatches(updatedAnswers);
              setMatchedOfferIds(matches);
              setScore(matches.length);

              setStep('result');
            }} />
          ) : step === 'result' ? (
            <ResultPage answers={answers} matchIds={matchedOfferIds} score={score} />
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
