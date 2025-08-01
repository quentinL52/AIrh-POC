import React, { useState } from 'react';
import { authService } from '../services/authService';
import './Layout.css';

const Layout = ({ children, activeSection, onSectionChange }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    
    const user = {
        name: 'Quentin Loumeau',
        email: 'loumeau.quentin@email.com',
        initials: 'L'
    };

    const menuItems = [
        {
            section: 'main',
            title: '',
            items: [
                { id: 'home', label: 'Home', icon: 'fas fa-home' }
            ]
        },
        {
            section: 'produits',
            title: 'PRODUCTS',
            items: [
                { id: 'interview', label: 'Interview AI', icon: 'fas fa-microphone' }
            ]
        },
        {
            section: 'resources',
            title: 'RESOURCES',
            items: [
                { id: 'jobs', label: 'Jobs', icon: 'fas fa-briefcase' },
                { id: 'resume', label: 'Resume', icon: 'fas fa-file-alt' },
                { id: 'feedbacks', label: 'Feedbacks', icon: 'fas fa-comments' }
            ]
        },
        {
            section: 'account',
            title: 'COMPTE',
            items: [
                { id: 'settings', label: 'Settings', icon: 'fas fa-cog' }
            ]
        }
    ];

    const handleLogout = async () => {
        try {
            await authService.logout();
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
            // Forcer la redirection même en cas d'erreur
            window.location.href = '/';
        }
    };

    return (
        <div className="app-layout">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Header */}
                <div className="sidebar-header">
                    <div className="app-logo">Airh</div>
                    <div className="workspace-title">Mon espace</div>
                </div>
                
                {/* Navigation */}
                <nav className="sidebar-nav">
                    {menuItems.map((section) => (
                        <div key={section.section} className="nav-section">
                            {section.title && (
                                <div className="section-title">{section.title}</div>
                            )}
                            {section.items.map((item) => (
                                <button
                                    key={item.id}
                                    className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                                    onClick={() => onSectionChange(item.id)}
                                >
                                    <i className={item.icon}></i>
                                    <span className="nav-label">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    ))}
                </nav>
                
                {/* User Profile */}
                <div className="sidebar-footer">
                    <div className="user-profile">
                        <div className="user-avatar">{user.initials}</div>
                        <div className="user-info">
                            <div className="user-name">loumeau.quen...</div>
                            <div className="user-email">loumeau.quentin...</div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <button 
                                className="user-menu-btn"
                                onClick={() => setShowUserMenu(!showUserMenu)}
                            >
                                <i className="fas fa-ellipsis-v"></i>
                            </button>
                            
                            {/* Menu déroulant */}
                            {showUserMenu && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: '100%',
                                    right: 0,
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                                    minWidth: '150px',
                                    zIndex: 1000,
                                    marginBottom: '0.5rem'
                                }}>
                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            border: 'none',
                                            background: 'none',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            color: '#374151',
                                            fontSize: '0.875rem',
                                            borderRadius: '0.5rem',
                                            transition: 'background-color 0.2s'
                                        }}
                                        onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                                    >
                                        <i className="fas fa-sign-out-alt" style={{ marginRight: '0.5rem' }}></i>
                                        Se déconnecter
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
            
            {/* Fermer le menu si on clique ailleurs */}
            {showUserMenu && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 999
                    }}
                    onClick={() => setShowUserMenu(false)}
                />
            )}
        </div>
    );
};

export default Layout;