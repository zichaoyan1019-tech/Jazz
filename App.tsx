import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import IntroPage from './pages/IntroPage';
import CupheadPage from './pages/CupheadPage';
import ReferencesPage from './pages/ReferencesPage';

// Using HashRouter ensures the app works on static file hosts (like GitHub Pages) 
// without needing server-side rewrite rules.
const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/intro" replace />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="cuphead" element={<CupheadPage />} />
          <Route path="references" element={<ReferencesPage />} />
          <Route path="*" element={<Navigate to="/intro" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;