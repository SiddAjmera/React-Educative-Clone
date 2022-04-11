import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Introduction from './Pages/Introduction';
import LeadershipStyles from './Pages/LeadershipStyles';
import Autocratic from './Pages/Autocratic';
import Democratic from './Pages/Democratic';
import FreeRein from './Pages/FreeRein';
import BeSelective from './Pages/BeSelective';
import Quiz from './Pages/Quiz';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="leadership-styles" element={<LeadershipStyles />} />
          <Route path="autocratic" element={<Autocratic />} />
          <Route path="democratic" element={<Democratic />} />
          <Route path="free-rein" element={<FreeRein />} />
          <Route path="be-selective" element={<BeSelective />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </MainContent>
    </div>
  );
}
