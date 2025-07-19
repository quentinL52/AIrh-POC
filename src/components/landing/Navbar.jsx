import logo from '../../public/AIRH_logo.png';
import { authService } from '../../services/authService';

function Navbar() {
    const handleGoogleLogin = () => {
        authService.loginWithGoogle();
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo à gauche */}
                <div className="navbar-brand">
                    <img src={logo} alt="AIrh Logo" className="logo-icon" />
                </div>
                
                {/* Bouton CTA à droite */}
                <button onClick={handleGoogleLogin} className="cta-button">
                    <i className="fab fa-google"></i>
                    Se connecter avec Google
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
