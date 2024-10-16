import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Invest Sustainably with AI-Powered Precision</h2>
      <p>
        Our platform uses AI to generate personalized investment portfolios that prioritize environmental, social, and governance (ESG) factors. Align your financial goals with your values effortlessly.
      </p>
      <button>
        <Link to="/demo" style={{ color: 'white', textDecoration: 'none' }}>Try Our Demo</Link>
      </button>
      <iframe width="100%" height="415" src="https://www.youtube.com/embed/your-video-id" title="Explainer Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

export default Home;