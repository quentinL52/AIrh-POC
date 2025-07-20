import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../style/AuthCallback.css';
import { authService } from '../services/authService';

const AuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('Finalisation de votre connexion...');

  useEffect(() => {
    const verifyAuth = async () => {
      const isAuthenticated = authService.isAuthenticated();

      if (isAuthenticated) {
        setStatus('success');
        setMessage('Connexion réussie ! Redirection...');
        setTimeout(() => {
          navigate('/home');
        }, 1500);
      } else {
        const params = new URLSearchParams(location.search);
        const error = params.get('error');
        
        console.error('Erreur dans AuthCallback:', error || 'Aucune session utilisateur trouvée.');
        setStatus('error');
        setMessage(error || 'Une erreur est survenue lors de la connexion.');
        
        setTimeout(() => {
          navigate('/'); 
        }, 3000);
      }
    };

    verifyAuth();

  }, [navigate, location]);

  const getIcon = () => {
    switch (status) {
      case 'success':
        return <i className="fas fa-check-circle"></i>;
      case 'error':
        return <i className="fas fa-times-circle"></i>;
      default:
        return <i className="fas fa-spinner fa-spin"></i>;
    }
  };

  return (
    <div className="auth-callback-container">
      <div className="auth-callback-card">
        <div className={`auth-callback-icon ${status}`}>
          {getIcon()}
        </div>
        
        <h2 className="auth-callback-title">
          {status === 'success' ? 'Connexion réussie !' : 
           status === 'error' ? 'Erreur de connexion' : 
           'Connexion en cours...'}
        </h2>
        
        <p className="auth-callback-message">
          {message}
        </p>

        {status === 'error' && (
          <button
            className="auth-callback-button"
            onClick={() => navigate('/')}
          >
            Retour à l'accueil
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;