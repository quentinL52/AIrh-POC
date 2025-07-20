import { initializeGoogleAuth, signInWithGoogle } from './googleAuth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const authService = {
  // Initialiser Google Auth au démarrage de l'app
  initialize: async () => {
    try {
      await initializeGoogleAuth();
      console.log('Google Auth initialisé avec succès');
    } catch (error) {
      console.error('Erreur initialisation Google Auth:', error);
    }
  },

  // Connexion avec Google (utilisateur existant)
  loginWithGoogle: async () => {
    try {
      console.log('🔄 Début connexion Google...');
      
      // Récupérer les infos de Google
      const { userInfo } = await signInWithGoogle();
      console.log('✅ Infos Google récupérées:', userInfo);
      
      // Préparer les données pour votre API
      const userData = {
        google_id: userInfo.sub,
        email: userInfo.email,
        name: userInfo.name,
        picture_url: userInfo.picture
      };
      
      console.log('📤 Envoi vers /auth/login:', userData);
      
      // Appeler votre route POST /auth/login
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
      });

      console.log('📥 Réponse API login:', response.status);

      if (response.ok) {
        const user = await response.json();
        console.log('✅ Connexion réussie:', user);
        
        // Stocker les infos utilisateur
        localStorage.setItem('user', JSON.stringify(user));
        
        // Rediriger vers /home
        window.location.href = '/home';
        return user;
      } else if (response.status === 404) {
        // Utilisateur non trouvé
        console.log('❌ Utilisateur non trouvé (404)');
        throw new Error('USER_NOT_FOUND');
      } else {
        const errorData = await response.json();
        console.error('❌ Erreur API login:', errorData);
        throw new Error('Erreur de connexion');
      }
    } catch (error) {
      console.error('❌ Erreur dans loginWithGoogle:', error);
      throw error;
    }
  },

  // Inscription avec Google (nouvel utilisateur)
  signupWithGoogle: async () => {
    try {
      console.log('🔄 Début inscription Google...');
      
      // Récupérer les infos de Google
      const { userInfo } = await signInWithGoogle();
      console.log('✅ Infos Google récupérées:', userInfo);
      
      // Préparer les données pour votre API
      const userData = {
        google_id: userInfo.sub,
        email: userInfo.email,
        name: userInfo.name,
        picture_url: userInfo.picture
      };
      
      console.log('📤 Envoi vers /auth/register:', userData);
      
      // Appeler votre route POST /auth/register
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
      });

      console.log('📥 Réponse API register:', response.status);

      if (response.status === 201) { // 201 Created
        const user = await response.json();
        console.log('✅ Inscription réussie:', user);
        
        // Stocker les infos utilisateur
        localStorage.setItem('user', JSON.stringify(user));
        
        // Rediriger vers /home
        window.location.href = '/home';
        return user;
      } else if (response.status === 409) {
        // Utilisateur déjà existant
        console.log('❌ Utilisateur déjà existant (409)');
        throw new Error('USER_ALREADY_EXISTS');
      } else {
        const errorData = await response.json();
        console.error('❌ Erreur API register:', errorData);
        throw new Error('Erreur d\'inscription');
      }
    } catch (error) {
      console.error('❌ Erreur dans signupWithGoogle:', error);
      throw error;
    }
  },

  // Vérifier si l'utilisateur est connecté
  isAuthenticated: () => {
    const user = localStorage.getItem('user');
    return !!user;
  },

  // Récupérer les informations de l'utilisateur actuel
  getCurrentUser: async () => {
    try {
      // Récupérer depuis le localStorage
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

  // Déconnexion
  logout: () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  },

  // Gestion automatique login/signup avec fallback
  authenticateWithGoogle: async () => {
    try {
      console.log('🔄 Tentative de connexion automatique...');
      // Essayer d'abord la connexion
      return await authService.loginWithGoogle();
    } catch (error) {
      if (error.message === 'USER_NOT_FOUND') {
        console.log('🔄 Utilisateur non trouvé, tentative d\'inscription...');
        // Si l'utilisateur n'existe pas, essayer l'inscription
        try {
          return await authService.signupWithGoogle();
        } catch (signupError) {
          if (signupError.message === 'USER_ALREADY_EXISTS') {
            console.log('🔄 Conflit timing, nouvelle tentative de connexion...');
            // Conflit de timing, essayer à nouveau la connexion
            return await authService.loginWithGoogle();
          }
          throw signupError;
        }
      }
      throw error;
    }
  },

  // Méthode pour gérer le callback (compatible avec votre structure existante)
  handleAuthCallback: () => {
    // Dans votre architecture côté client, on vérifie juste si un utilisateur est connecté
    const user = localStorage.getItem('user');
    return !!user;
  }
};