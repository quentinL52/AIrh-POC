import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const user = { name: 'Quentin' }; 

    return (
        <div>
            <h1 className="greeting">Bonjour, {user.name}</h1>
            <p className="subtitle">Bienvenue sur AIrh</p>

            <div className="getting-started-section">
                <h2 className="section-title">Commencer</h2>
                <div className="steps-grid">
                    <Link to="/resume" className="step-card">
                        <div className="step-header">
                            <span className="step-number">Étape 1</span>
                        </div>
                        <div className="step-icon">
                            <i className="fas fa-file-alt"></i>
                        </div>
                        <div className="step-content">
                            <h3 className="step-title">Téléchargez votre CV</h3>
                            <p className="step-description">Téléchargez votre CV pour aider AIrh à mieux vous connaître</p>
                        </div>
                        <i className="fas fa-arrow-right step-arrow"></i>
                    </Link>

                    <Link to="/jobs" className="step-card">
                        <div className="step-header">
                            <span className="step-number">Étape 2</span>
                        </div>
                        <div className="step-icon">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <div className="step-content">
                            <h3 className="step-title">Ajoutez vos offres</h3>
                            <p className="step-description">Fournissez les détails des offres d'emploi qui vous intéressent</p>
                        </div>
                        <i className="fas fa-arrow-right step-arrow"></i>
                    </Link>

                    <Link to="/interview" className="step-card">
                        <div className="step-header">
                            <span className="step-number">Étape 3</span>
                        </div>
                        <div className="step-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="step-content">
                            <h3 className="step-title">Démarrez un entretien</h3>
                            <p className="step-description">Lancez votre entretien avec Roni notre l'assistant d'AIrh</p>
                        </div>
                        <i className="fas fa-arrow-right step-arrow"></i>
                    </Link>
                </div>
            </div>

            <div className="contact-section">
                <div className="contact-grid">
                    <div className="contact-card">
                        <h3>Support</h3>
                        <p>N'hésitez pas à nous contacter pour toute question ou assistance.</p>
                        <Link to="/contact" className="contact-button">
                            Nous contacter
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
