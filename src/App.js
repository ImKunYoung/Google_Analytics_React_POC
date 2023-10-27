import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Test1 from './Test1';
import Test2 from './Test2';

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    window.gtag('event', 'page_view', { page_path: location.pathname });
  }, [location]);
}

function App() {
  usePageTracking();

  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Google_Analytics_React_POC
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <nav>
              <ul>
                <li>
                  <Link to="/test1">Test 1</Link>
                </li>
                <li>
                  <Link to="/test2">Test 2</Link>
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
