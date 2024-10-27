// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainHome } from './components/MainHome'; // Change to named import

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainHome />} /> {/* Update usage here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
