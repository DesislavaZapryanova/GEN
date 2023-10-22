// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Collection from './components/pages/Collection';
import Contacts from './components/pages/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/collection"
              element={<Collection />}
            />
            <Route
              path="/contacts"
              element={<Contacts />}
            />
          </Routes>
        </main>
        {/* You might want to include a <footer> here if needed */}
      </div>
    </Router>
  );
}

export default App;
