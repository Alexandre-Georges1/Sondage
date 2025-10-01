import './style/Survey.css';

function ApresQuestions15({ onContinue }) {
    return (
        <div className="after-questions">
            <div className="transition-content">
                <h2>Très bien ! Vous êtes presque à la fin</h2>
                <p>Plus que quelques questions !</p>
                <p className="warning-text">
                    Les questions à suivre sont un peu plus complexes, restez concentré !
                </p>
                <button className="continue-button" onClick={onContinue}>
                    Continuer vers les dernières questions <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}

export default ApresQuestions15;