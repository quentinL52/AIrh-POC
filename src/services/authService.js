// src/services/authService.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

export const authService = {
  // Initialisation (pas besoin de Google SDK côté client)
  initialize: async () => {
    console.log('Auth service initialisé');
  },

  // Connexion avec Google - Redirige vers le backend
  loginWithGoogle: () => {
    const authUrl = `${API_BASE_URL}/auth/oauth/google`;
    console.log('🔄 Redirection vers:', authUrl);
    window.location.href = authUrl;
  },

  // Inscription avec Google - Même processus (sera géré par le backend)
  signupWithGoogle: () => {
    const authUrl = `${API_BASE_URL}/auth/oauth/google`;
    console.log('🔄 Redirection vers:', authUrl);
    window.location.href = authUrl;
  },

  // Méthode unifiée pour connexion/inscription automatique
  authenticateWithGoogle: () => {
    const authUrl = `${API_BASE_URL}/auth/oauth/google`;
    console.log('🔄 Redirection vers:', authUrl);
    window.location.href = authUrl;
  },

  // Vérifier si l'utilisateur est connecté
  isAuthenticated: () => {
    const user = localStorage.getItem('user');
    return !!user;
  },

  // Récupérer les informations de l'utilisateur actuel
  getCurrentUser: async () => {
    try {
      const localUser = localStorage.getItem('user');
      if (localUser) {
        return JSON.parse(localUser);
      }
      return null;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur:', error);
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  },

  handleAuthCallback: (urlParams) => {
    const token = urlParams.get('token');
    const userData = urlParams.get('user');
    
    if (token && userData) {
      try {
        const user = JSON.parse(decodeURIComponent(userData));
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      } catch (error) {
        console.error('Erreur parsing user data:', error);
        return false;
      }
    }
    return false;
  }
};