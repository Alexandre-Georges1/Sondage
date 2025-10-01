import { useState } from 'react';
import Bienvenue from './components/bienvenue';
import Identification from './components/identification';
import Questions from './components/questions';
import Resultats from './components/resultats';
import Classement from './components/classement';
import './components/style/Survey.css';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome'); 
  const [userName, setUserName] = useState('');
  const [answers, setAnswers] = useState({});

  const handleStart = () => {
    setCurrentStep('identification');
  };

  const handleIdentification = (name) => {
    setUserName(name);
    setCurrentStep('questions');
  };

  const handleQuestionsComplete = (userAnswers) => {
    setAnswers(userAnswers);
    setCurrentStep('results');
  };

  const handleRestart = () => {
    setCurrentStep('welcome');
    setUserName('');
    setAnswers({});
  };

  const handleViewRankings = () => {
    setCurrentStep('classement');
  };

  return (
    <div className="survey-container">
      {currentStep === 'welcome' && <Bienvenue onStart={handleStart} />}
      {currentStep === 'identification' && <Identification onSubmit={handleIdentification} />}
      {currentStep === 'questions' && (
        <Questions userName={userName} onComplete={handleQuestionsComplete} />
      )}
      {currentStep === 'results' && (
        <>
          <Resultats userName={userName} answers={answers} onRestart={handleRestart} />
          <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="restart-button"
              onClick={handleViewRankings}
              style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}
            >
              Voir le classement
            </button>
            <button 
              className="restart-button"
              onClick={handleRestart}
              style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
            >
              <i class="fa-solid fa-rotate-left"></i> Recommencer
            </button>
          </div>
        </>
      )}
      {currentStep === 'classement' && (
        <>
          <Classement />
          <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="restart-button"
              onClick={handleRestart}
            >
              Retour à l'accueil
            </button>
            <button 
              className="restart-button"
              onClick={() => setCurrentStep('results')}
              style={{ background: 'linear-gradient(135deg, #ff9800 0%, #ff5722 100%)' }}
            >
              ◀️ Voir mes résultats
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
