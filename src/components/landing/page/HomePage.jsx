import React, { useState } from 'react';
import Layout from '../components/Layout';
import ResumeTab from '../components/tabs/ResumeTab';
import JobsTab from '../components/tabs/JobsTab';
import InterviewTab from '../components/tabs/InterviewTab';
import FeedbacksTab from '../components/tabs/FeedbacksTab';
import '../style/HomePage.css';

const HomePage = ({ user }) => {
    const [activeSection, setActiveSection] = useState('home');

    // Composant pour la page d'accueil (dashboard)
    const HomeContent = () => (
        <div className="home-dashboard">
            {/* Alert de bienvenue */}
            <div className="welcome-alert">
                <div className="alert-icon">
                    <i className="fas fa-info-circle"></i>
                </div>
                <div className="alert-content">
                    <span>Heureux de vous revoir, {user?.name || 'Utilisateur'} !</span>
                    <button className="alert-close">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>

            {/* Header */}
            <div className="dashboard-header">
                <h1 className="dashboard-title">Bonjour, {user?.name || 'Utilisateur'}</h1>
                <p className="dashboard-subtitle">Bienvenue sur AIrh</p>
            </div>

            {/* Section Commencer */}
            <div className="getting-started-section">
                <h2 className="section-heading">Commencer</h2>
                
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-header">
                            <span className="step-number">Étape 1</span>
                        </div>
                        <div className="step-icon">
                            <i className="fas fa-file-alt"></i>
                        </div>
                        <h3 className="step-title">Téléchargez votre CV</h3>
                        <p className="step-description">
                            Téléchargez votre CV pour aider AIrh à mieux vous connaître
                        </p>
                        <button className="step-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>

                    <div className="step-card">
                        <div className="step-header">
                            <span className="step-number">Étape 2</span>
                        </div>
                        <div className="step-icon">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <h3 className="step-title">Ajoutez vos offres</h3>
                        <p className="step-description">
                            Fournissez les détails des offres d'emploi qui vous intéressent
                        </p>
                        <button className="step-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>

                    <div className="step-card">
                        <div className="step-header">
                            <span className="step-number">Étape 3</span>
                        </div>
                        <div className="step-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3 className="step-title">Démarrez un entretien</h3>
                        <p className="step-description">
                            Lancez votre entretien avec l'aide de l'IA d'AIrh
                        </p>
                        <button className="step-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Section Support */}
            <div className="support-section">
                <div className="support-card">
                    <h3 className="support-title">Support</h3>
                    <p className="support-description">
                        N'hésitez pas à nous contacter pour toute question ou assistance.
                    </p>
                    <button className="contact-btn">
                        Nous contacter
                    </button>
                </div>
            </div>
        </div>
    );

    // Fonction pour rendre le contenu selon la section active
    const renderContent = () => {
        switch (activeSection) {
            case 'home':
                return <HomeContent />;
            case 'resume':
                return <ResumeTab />;
            case 'jobs':
                return <JobsTab />;
            case 'interview':
                return <InterviewTab />;
            case 'feedbacks':
                return <FeedbacksTab />;
            case 'settings':
                return (
                    <div className="settings-content">
                        <h1>Paramètres</h1>
                        <p>Page des paramètres à implémenter</p>
                    </div>
                );
            default:
                return <HomeContent />;
        }
    };

    return (
        <Layout 
            activeSection={activeSection} 
            onSectionChange={setActiveSection}
        >
            {renderContent()}
        </Layout>
    );
};

export default HomePage;