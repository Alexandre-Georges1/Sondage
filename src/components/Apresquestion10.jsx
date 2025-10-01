function ApresQuestions10({ onContinue }) {
    return (
        <div className="after-questions">
            <div className="transition-content">
                <h2>Bravo pour votre persévérance !</h2>
                <p>Vous êtes arrivés à la moitié du questionnaire</p>
                <div className="progress-milestone">
                    <span className="milestone-icon">50%</span>
                    <p>10 questions sur 18 complétées</p>
                </div>
                <p className="warning-text">
                    Les questions à suivre seront un peu plus personnelles, restez concentré !
                </p>
                <button className="continue-button" onClick={onContinue}>
                    Continuer le questionnaire <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default ApresQuestions10;