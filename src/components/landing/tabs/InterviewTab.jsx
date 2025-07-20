const InterviewTab = () => (
    <div className="tab-content">
        <div className="content-header">
            <h2 className="section-title">Assistant Entretien IA</h2>
            <p className="section-subtitle">Entraînez-vous avec notre assistant intelligent Roni</p>
        </div>
        
        <div className="interview-options">
            <div className="interview-card">
                <div className="interview-icon">
                    <i className="fas fa-brain"></i>
                </div>
                <h3>Entretien Technique</h3>
                <p>Questions sur vos compétences techniques et votre expertise</p>
                <ul className="feature-list">
                    <li>Évaluation des compétences en programmation</li>
                    <li>Questions sur les outils et technologies</li>
                    <li>Résolution de problèmes techniques</li>
                </ul>
                <button className="start-button">
                    <i className="fas fa-play"></i>
                    Commencer l'entretien
                </button>
            </div>
            
            <div className="interview-card">
                <div className="interview-icon">
                    <i className="fas fa-comments"></i>
                </div>
                <h3>Entretien Comportemental</h3>
                <p>Questions sur votre expérience et votre motivation</p>
                <ul className="feature-list">
                    <li>Évaluation de vos soft skills</li>
                    <li>Questions sur votre parcours</li>
                    <li>Mise en situation professionnelle</li>
                </ul>
                <button className="start-button">
                    <i className="fas fa-play"></i>
                    Commencer l'entretien
                </button>
            </div>
        </div>
        
        <div className="interview-info">
            <div className="info-card">
                <h4>Comment ça marche ?</h4>
                <ol>
                    <li>Choisissez le type d'entretien</li>
                    <li>Répondez aux questions de Roni</li>
                    <li>Recevez un feedback détaillé</li>
                </ol>
            </div>
        </div>
    </div>
);

export default InterviewTab;