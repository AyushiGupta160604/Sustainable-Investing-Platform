import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import Demo from './components/Demo';
import './styles.css';
import logo from './assets/logo.jpeg';

// function App() {
//   return (
//     <Router>
//       <header>
//         <h1>Sustainable Investing Platform</h1>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/how-it-works">How It Works</Link>
//           <Link to="/demo">Try Demo</Link>
//         </nav>
//       </header>
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/how-it-works" element={<HowItWorks />} />
//           <Route path="/demo" element={<Demo />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
function App() {
  return (
    <Router>
      <header>
        <img src={logo} alt="EcoInvest Logo" style={{ width: '150px', height: 'auto' }} /> {/* Adjust size as needed */}
        <h1>Sustainable Investing Platform</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/demo">Try Demo</Link>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;