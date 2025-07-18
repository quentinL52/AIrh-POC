import logo from '../../assets/AIRH_logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                {/* Logo à gauche */}
                <div className="navbar-brand">
                    <img src={logo} alt="AIrh Logo" className="logo-icon" />
                </div>
                
                {/* Bouton CTA à droite */}
                <a href="login" className="cta-button">
                    <i className="fas fa-sign-in-alt"></i>
                    Se connecter
                </a>
            </div>
        </nav>
    );
}

export default Navbar;