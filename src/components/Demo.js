import React, { useState } from 'react';

function Demo() {
  const [portfolio, setPortfolio] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userPreferences = {
      risk: formData.get('risk'),
      focus: formData.get('focus'),
    };
    generatePortfolio(userPreferences);
  };

  const generatePortfolio = (preferences) => {
    const samplePortfolio = {
      risk: preferences.risk,
      focus: preferences.focus,
      companies: ['Company A (Renewable Energy)', 'Company B (Ethical Labor)', 'Company C (Green Tech)'],
    };
    setPortfolio(samplePortfolio);
  };

  return (
    <div>
      <h2>Investment Preferences</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Risk Level:
          <select name="risk">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label>
          Focus Area:
          <select name="focus">
            <option value="environmental">Environmental</option>
            <option value="social">Social</option>
            <option value="governance">Governance</option>
          </select>
        </label>
        <button type="submit">Generate Portfolio</button>
      </form>

      {portfolio && (
        <div>
          <h3>Your Portfolio:</h3>
          <p>Risk Level: {portfolio.risk}</p>
          <p>Focus: {portfolio.focus}</p>
          <h4>Companies:</h4>
          <ul>
            {portfolio.companies.map((company, index) => (
              <li key={index}>{company}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Demo;