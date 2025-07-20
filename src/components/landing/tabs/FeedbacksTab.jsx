const FeedbacksTab = () => (
    <div className="tab-content">
        <div className="content-header">
            <h2 className="section-title">Historique des feedbacks</h2>
            <p className="section-subtitle">Consultez tous vos feedbacks d'entretiens et analyses</p>
        </div>
        
        <div className="feedbacks-section">
            <div className="empty-state">
                <i className="fas fa-comments"></i>
                <h3>Aucun feedback pour le moment</h3>
                <p>Commencez par passer un entretien pour recevoir votre première analyse détaillée.</p>
                <button className="btn-primary">
                    <i className="fas fa-briefcase"></i>
                    Voir les offres d'emploi
                </button>
            </div>
        </div>
    </div>
);

export default FeedbacksTab;