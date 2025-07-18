function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <img src="/images/AIRH_logo.png" alt="AIrh Logo" className="logo-icon" />
                </div>
                
                <a href="/login" className="cta-button">
                    <i className="fas fa-sign-in-alt"></i>
                    Se connecter
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
