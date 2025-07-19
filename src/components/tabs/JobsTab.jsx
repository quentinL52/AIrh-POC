const JobsTab = () => (
    <div className="tab-content">
        <div className="content-header">
            <h2 className="section-title">Les offres d'emploi</h2>
            <p className="section-subtitle">Découvrez les opportunités disponibles et lancez votre entretien</p>
        </div>
        
        <div className="search-section">
            <div className="search-input-wrapper">
                <i className="fas fa-search search-icon"></i>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Rechercher une offre d'emploi..."
                />
            </div>
        </div>
        
        <div className="jobs-grid">
            {/* Exemple d'offres d'emploi */}
            <div className="job-card">
                <div className="job-header">
                    <h3 className="job-title">Data Analyst</h3>
                    <div className="job-company">TechCorp</div>
                </div>
                <div className="job-info">
                    <div className="job-info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Paris</span>
                    </div>
                    <div className="job-info-item">
                        <i className="fas fa-file-contract"></i>
                        <span>CDI</span>
                    </div>
                </div>
                <div className="job-description">
                    <p>Nous recherchons un Data Analyst passionné pour rejoindre notre équipe...</p>
                </div>
                <div className="job-actions">
                    <button className="job-link">
                        <i className="fas fa-external-link-alt"></i>
                        Voir l'offre
                    </button>
                    <button className="interview-link">
                        <i className="fas fa-microphone"></i>
                        Entretien
                    </button>
                </div>
            </div>
            
            <div className="job-card">
                <div className="job-header">
                    <h3 className="job-title">Développeur Python</h3>
                    <div className="job-company">DataTech</div>
                </div>
                <div className="job-info">
                    <div className="job-info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Lyon</span>
                    </div>
                    <div className="job-info-item">
                        <i className="fas fa-file-contract"></i>
                        <span>CDI</span>
                    </div>
                </div>
                <div className="job-description">
                    <p>Rejoignez notre équipe de développement pour créer des solutions innovantes...</p>
                </div>
                <div className="job-actions">
                    <button className="job-link">
                        <i className="fas fa-external-link-alt"></i>
                        Voir l'offre
                    </button>
                    <button className="interview-link">
                        <i className="fas fa-microphone"></i>
                        Entretien
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default JobsTab;