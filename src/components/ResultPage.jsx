import React from 'react';
import { earningOptions } from '../data/earningOptions.js';

function ResultPage({ answers }) {
  const handleShareWhatsApp = () => {
    // Placeholder for WhatsApp share
    alert('Share via WhatsApp');
  };

  const handleCopyLink = () => {
    // Placeholder for copy link
    navigator.clipboard.writeText('https://kumar-ritu-raj.github.io/passive-income/');
    alert('Link copied');
  };

  return (
    <div>
      <h1>Congratulation</h1>
      <h2>You are eligible for these offers</h2>
      {answers.search === 'yes' && (
        <div className="card opportunity-card">
          <h2>{earningOptions.search.title}</h2>
          <img
            src={earningOptions.search.qrImage}
            alt="Search referral QR code"
            style={{ maxWidth: '200px', width: '100%', margin: '10px auto' }}
          />
          <p>
            Referral URL: <a href={earningOptions.search.url} target="_blank" rel="noreferrer">Register Now and Earn free</a>
          </p>
          <p>
            YouTube: <a href={earningOptions.search.video} target="_blank" rel="noreferrer">Watch tutorial</a>
          </p>
        </div>
      )}
      {answers.shopping === 'yes' && (
        <div className="card opportunity-card">
          <h2>{earningOptions.shopping.title}</h2>
          <img
            src={earningOptions.shopping.qrImage}
            alt="Shopping referral QR code"
            style={{ maxWidth: '200px', width: '100%', margin: '10px auto' }}
          />
          <p>
            Referral URL: <a href={earningOptions.shopping.url} target="_blank" rel="noreferrer">Register Now and Earn free</a>
          </p>
          <p>
            YouTube: <a href={earningOptions.shopping.video} target="_blank" rel="noreferrer">Watch tutorial</a>
          </p>
        </div>
      )}
      <div className="card share-card">
        <h2>💰 Share with friends and help them earn too.</h2>
        <div className="button-group">
          <button onClick={handleShareWhatsApp}>Share on WhatsApp</button>
          <button onClick={handleCopyLink}>Copy Referral Link</button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;