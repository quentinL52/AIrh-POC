import { authService } from '../../services/authService';

function Navbar() {
    const [showAuthPopup, setShowAuthPopup] = useState(false);
    const handleAuthButtonClick = () => {
        setShowAuthPopup(true);
    };
    const handleClosePopup = () => {
        setShowAuthPopup(false);
    };
    const handleGoogleAuth = () => {
        authService.authenticateWithGoogle();
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo à gauche */}
                <div className="navbar-brand">
                    <img src="/AIRH_logo.png" alt="AIrh Logo" className="logo-icon" />
                </div>
                
                {/* Bouton CTA à droite */}
                <button onClick={handleGoogleLogin} className="cta-button">
                    Se connecter / s'inscrire
                </button>
            </div>
        </nav>
            <AuthPopup 
                isOpen={showAuthPopup}
                onClose={handleClosePopup}
                onGoogleLogin={handleGoogleAuth}  // Même fonction
                onGoogleSignup={handleGoogleAuth} // Même fonction
            />
        </>
    );
}

export default Navbar;
