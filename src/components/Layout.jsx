import React, { useState } from 'react';
import './Layout.css';

const Layout = ({ children, activeSection, onSectionChange }) => {
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
                        <button className="user-menu-btn">
                            <i className="fas fa-ellipsis-v"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;