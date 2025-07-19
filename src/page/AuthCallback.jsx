import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/AuthCallback.css';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('processing');
  const [message, setMessage] = useState('Finalisation de votre connexion...');

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const user = localStorage.getItem('user');
        
        if (user) {
          setStatus('success');
          setMessage('Connexion réussie ! Redirection...');
          
          setTimeout(() => {
            navigate('/home');
          }, 1500);
        } else {
          throw new Error('Aucune donnée utilisateur trouvée');
        }
      } catch (error) {
        console.error('Erreur dans AuthCallback:', error);
        setStatus('error');
        setMessage('Erreur lors de la connexion');
        
        setTimeout(() => {
          navigate('/?error=auth_failed');
        }, 2000);
      }
    };

    setTimeout(handleAuthCallback, 500);
  }, [navigate]);

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