import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const success = authService.handleAuthCallback();
        
        if (success) {
          const user = await authService.getCurrentUser();
          
          if (user) {
            setTimeout(() => {
              navigate('/home');
            }, 1000);
          } else {
            throw new Error('Impossible de récupérer les données utilisateur');
          }
        } else {
          throw new Error('Token non trouvé dans l\'URL');
        }
      } catch (error) {
        console.error('Erreur d\'authentification:', error);
        
        setTimeout(() => {
          navigate('/?error=auth_failed');
        }, 2000);
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        padding: '3rem',
        background: 'white',
        borderRadius: '0.75rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          color: 'white',
          fontSize: '1.5rem'
        }}>
          <i className="fas fa-spinner fa-spin"></i>
        </div>
        
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '0.5rem'
        }}>
          Connexion en cours...
        </h2>
        
        <p style={{
          color: '#6b7280',
          fontSize: '0.875rem'
        }}>
          Nous finalisons votre authentification
        </p>
      </div>
    </div>
  );
};

export default AuthCallback;