import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './page/Landing.jsx';
import HomePage from './page/HomePage.jsx';
import AuthCallback from './page/AuthCallback.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import './style/Landing.css';
import './style/HomePage.css';
import './components/Layout.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<div>Page de connexion (à implémenter)</div>} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);