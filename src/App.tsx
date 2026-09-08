import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Moved from './pages/Moved';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Moved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
