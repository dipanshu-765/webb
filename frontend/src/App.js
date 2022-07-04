import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import './App.css';
import TracksContainer from './components/Explore';
import Explore from './components/Explore';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector( state => state.auth)

  const returnLoggedInPage = page => <>
      <Navbar />
      <div>
        <SearchBar />
        <Dashboard page={page}/>
      </div>
  </>

  const returnLandingPage = <div>
      <Header />
      <LandingPage />
  </div>

  return (
    <React.Fragment>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={ user ? returnLoggedInPage('') : returnLandingPage }></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
