const API_BASE_URL = 'http://localhost:8000'; // Ajustez selon votre config

export const authService = {
  // Redirection vers Google OAuth
  loginWithGoogle: () => {
    window.location.href = `${API_BASE_URL}/auth/login/google`;
  },

  // Vérifier si l'utilisateur est connecté via les cookies
  isAuthenticated: () => {
    return document.cookie.includes('session_token=');
  },

  // Récupérer les infos utilisateur depuis le backend via les cookies
  getCurrentUser: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        credentials: 'include', // Important pour les cookies
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur:', error);
      return null;
    }
  },

  logout: async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'GET',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
    window.location.href = '/';
  },

  handleAuthCallback: () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      // Le token est maintenant géré par les cookies côté serveur
      // On peut juste rediriger vers /home
      return true;
    }
    return false;
  }
};