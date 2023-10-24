// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Collection from './components/pages/Collection';
import Contacts from './components/pages/Contacts';
import './App.css';
import Footer from './components/Footer';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';
import Project4 from './components/pages/Project4';
import Project5 from './components/pages/Project5';
import About from './components/pages/About';

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
            <Route
              path="/project1"
              element={<Project1 />}
            />
            <Route
              path="/project2"
              element={<Project2 />}
            />
            <Route
              path="/project3"
              element={<Project3 />}
            />
            <Route
              path="/project4"
              element={<Project4 />}
            />
            <Route
              path="/project5"
              element={<Project5 />}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
