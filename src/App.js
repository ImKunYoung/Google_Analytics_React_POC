import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Routes 추가
import logo from './logo.svg';
import './App.css';

import Test1 from './Test1';
import Test2 from './Test2';

import ReactGA from "react-ga4";

ReactGA.initialize("G-Y5132BYCPS");
ReactGA.send("pageview");


function App() {
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

          {/* <Routes>로 변경 */}
          <Routes>
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
