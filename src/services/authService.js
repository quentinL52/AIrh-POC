const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const authService = {
  // Connexion avec Google via OAuth (redirection)
  loginWithGoogle: () => {
    // Rediriger directement vers l'endpoint OAuth de votre backend
    const oauthUrl = `${API_BASE_URL}/api/v1/auth/oauth/google`;
    console.log('🔄 Redirection vers:', oauthUrl);
    window.location.href = oauthUrl;
  },

  // Vérifier si l'utilisateur est connecté
  isAuthenticated: () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return !!(user && token);
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

  // Récupérer le token
  getToken: () => {
    return localStorage.getItem('token');
  },

  // Déconnexion
  logout: async () => {
    try {
      // Optionnel : appeler l'endpoint de déconnexion du backend
      const token = authService.getToken();
      if (token) {
        await fetch(`${API_BASE_URL}/api/v1/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.warn('Erreur lors de la déconnexion côté serveur:', error);
    } finally {
      // Nettoyer le localStorage dans tous les cas
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/';
    }
  },

  // Faire des requêtes authentifiées
  makeAuthenticatedRequest: async (url, options = {}) => {
    const token = authService.getToken();
    
    if (!token) {
      throw new Error('Utilisateur non authentifié');
    }

    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    const config = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    const response = await fetch(url, config);

    // Si le token a expiré, rediriger vers la page de connexion
    if (response.status === 401) {
      authService.logout();
      return null;
    }

    return response;
  },

  // Méthode pour gérer le callback (pour compatibilité)
  handleAuthCallback: () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return !!(user && token);
  }
};