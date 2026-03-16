import React from 'react';
import { earningOptions } from '../data/earningOptions.js';

function ResultPage({ answers, matchIds = [], score = 0 }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://kumar-ritu-raj.github.io/passive-income/');
    alert('Link copied');
  };

  const matchedOptions = earningOptions.filter((option) => matchIds.includes(option.id));

  return (
    <div>
      <h1>Congratulations!</h1>
      <h2>You have {score} {score === 1 ? 'match' : 'matches'}.</h2>

      {matchedOptions.length > 0 ? (
        matchedOptions.map((option) => (
          <div key={option.id} className="card opportunity-card">
            <h2>{option.title}</h2>
            <p className="earning-till">💵 Earning till date: <strong>${option.earningToDate}</strong></p>
            <img
              src={option.qrImage}
              alt={`${option.title} QR code`}
              style={{ maxWidth: '200px', width: '100%', margin: '10px auto' }}
            />
            <p>
              Referral URL: <a href={option.url} target="_blank" rel="noreferrer">📝 Register Now and Earn</a>
            </p>
            <p>
              YouTube: <a href={option.video} target="_blank" rel="noreferrer">🎬 Watch tutorial</a>
            </p>
          </div>
        ))
      ) : (
        <div className="card">
          <h2>No matched offers yet</h2>
          <p>Try adjusting your answers to see more opportunities.</p>
        </div>
      )}



      <div className="card contact-card">
        <h2>Next Step</h2>
        <p>
          Click a referral link or scan the QR code to register. Once you finish registering, email me at <a href="mailto:kumarrituraj234@gmail.com">kumarrituraj234@gmail.com</a> and I will help you start earning.
        </p>
      </div>
            <div className="card share-card">
        <h2>💰 Share with friends and help them earn too.</h2>
        <div className="button-group">
          <button onClick={handleCopyLink}>Copy Referral Link</button>
        </div>
      </div>
    </div>
    
  );
}

export default ResultPage;