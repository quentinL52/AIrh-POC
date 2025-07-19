const ResumeTab = () => (
    <div className="tab-content">
        <div className="content-header">
            <h2 className="section-title">Gestion du CV</h2>
            <p className="section-subtitle">Téléchargez et analysez votre CV avec notre IA</p>
        </div>
        
        <div className="resume-grid">
            <div className="upload-section">
                <div className="upload-card">
                    <div className="upload-icon">
                        <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <h3>Télécharger votre CV</h3>
                    <p>Glissez-déposez votre fichier PDF ici</p>
                    <div className="upload-area">
                        <input type="file" accept=".pdf" className="file-input" />
                        <button className="upload-button">
                            <i className="fas fa-file-upload"></i>
                            Choisir un fichier
                        </button>
                    </div>
                    <p className="upload-hint">Format PDF uniquement</p>
                </div>
            </div>
            
            <div className="cv-analysis">
                <div className="analysis-card">
                    <div className="analysis-header">
                        <i className="fas fa-tasks"></i>
                        <h3>Profil Analysé</h3>
                    </div>
                    <div className="analysis-content">
                        <div className="empty-state">
                            <i className="fas fa-eye-slash"></i>
                            <h4>Aucune donnée à afficher</h4>
                            <p>Veuillez télécharger un CV pour que notre IA l'analyse</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ResumeTab;