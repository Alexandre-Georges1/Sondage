import { useState } from 'react';
import './style/Survey.css';
import ApresQuestions10 from './Apresquestion10';
import ApresQuestions15 from './Apresquestions15';

function Questions({ userName, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showTransition, setShowTransition] = useState(false);
  const [transitionType, setTransitionType] = useState(null);

  const questions = [
    {
      id: 'question1',
      text: 'Quel est le nom complet d\'Alexandre ?',
      type: 'text',
      placeholder: 'Entrez le nom complet...'
    },
    {
      id: 'question2',
      text: 'Quel âge a Alexandre aujourd\'hui ?',
      type: 'text',
      placeholder: 'Entrez l\'âge...'
    },
    {
      id: 'question3',
      text: 'Où est né Alexandre ?',
      type: 'text',
      placeholder: 'Entrez le lieu de naissance...'
    },

    {
      id: 'question4',
      text: 'Quelle est la couleur préférée d\'Alexandre ?',
      type: 'select',
      options: [
        { value: '', label: 'Sélectionnez une couleur...', disabled: true },
        { value: 'bleu', label: 'Bleu' },
        { value: 'blanc', label: 'Blanc' },
        { value: 'noir', label: 'Noir' },
        { value: 'jaune', label: 'Jaune' }
      ]
    },
    {
      id: 'question5',
      text: 'Quel est le plat préféré d\'Alexandre ?',
      type: 'select',
      options: [
        { value: '', label: 'Sélectionnez un plat...', disabled: true },
        { value: 'riz_cantonais', label: 'Riz cantonais' },
        { value: 'pate', label: 'La pâte' },
        { value: 'spaghetti', label: 'Spaghetti' },
        { value: 'attieke', label: 'Attiéké' }
      ]
    },
    {
      id: 'question6',
      text: 'Alexandre a-t-il un animal de compagnie ?',
      type: 'radio',
      options: [
        { value: '', label: 'Sélectionnez une réponse...', disabled: true },
        { value: 'oui', label: 'Oui' },
        { value: 'non', label: 'Non' }
      ]
    },
    {
      id: 'question7',
      text: 'Alexandre a t-il le permis de conduire ?',
      type: 'radio',
      options: [
        { value: 'oui', label: 'Oui' },
        { value: 'non', label: 'Non' }
      ]
    },
    {
      id: 'question8',
      text: 'Quel est le domaine d\'études d\'Alexandre ?',
      type: 'radio',
      options: [
        { value: '', label: 'Sélectionnez un domaine...', disabled: true },
        { value: 'informatique', label: 'Informatique' },
        { value: 'mathematiques', label: 'Mathématiques' },
        { value: 'physique', label: 'Physique' },
        { value: 'biologie', label: 'Biologie' },
        { value: 'electricite', label: 'Électricité' }
      ]
    },
    {
      id: 'question9',
      text: 'Où fréquente-t-il?',
      type: 'text',
      placeholder: 'Entrez le lieu...'
    },
    {
      id: 'question10',
      text: 'Que fait alexandre de son temps libre ?',
      type: 'radio',
        options: [
            { value: 'coder', label: 'Coder' },
            { value: 'jouer aux jeux vidéo', label: 'Jouer aux jeux vidéo' },
            { value: 'lire des mangas', label: 'Lire des mangas' },
            { value: 'regarder des films/séries', label: 'Regarder des films/séries' }
        ]
    },
    {
      id: 'question11',
      text: 'Quelle est la taille d\'Alexandre ?',
      type: 'select',
        options: [
          { value: '', label: 'selectionner...', disabled: true },
          { value: '1m85', label: '1m85' },
          { value: '1m83', label: '1m83' },
          { value: '1m90', label: '1m90' }
        ]
    },
    {
      id: 'question12',
      text: 'Il aime les filles claires ou les teints noirs ?',
      type: 'radio',
      options: [
        { value: '', label: 'selectionner...', disabled: true },
        { value: 'claires', label: 'Filles claires' },
        { value: 'noirs', label: 'Teints noirs' },
        { value: 'Pas de préférence', label: 'Pas de préférence' }
      ]
    },
    {
      id: 'question13',
      text: 'Alexandre est déja tombé amoureux ?',
      type: 'radio',
      options: [
        { value: '', label: 'selectionner...', disabled: true },
        { value: 'oui', label: 'Oui' },
        { value: 'non', label: 'Non' }
      ]
    },
    {
      id: 'question14',
      text: 'Alexandre a un crush en ce moment ?',
      type: 'radio',
      options: [
        { value: '', label: 'selectionner...', disabled: true },
        { value: 'oui', label: 'Oui' },
        { value: 'non', label: 'Non' }
      ]
    },
    {
      id: 'question15',
      text: 'Alexandre a 1 million actuellement . Que ferait-il de cet argent ?',
      type: 'select',
        options: [
            { value: '', label: 'selectionner...', disabled: true },
            { value: 'Investir', label: 'Investir' },
            { value: 'Dépenser', label: 'Dépenser' },
            { value: 'Épargner', label: 'Épargner' }
        ]
    },
    {
      id: 'question16',
      text: 'Alexandre est gaucher ou droitier ?',
      type: 'radio',
      options: [
        { value: '', label: 'selectionner...', disabled: true },
        { value: 'gaucher', label: 'Gaucher' },
        { value: 'droitier', label: 'Droitier' }
      ]
    },
    {
      id: 'question17',
      text: 'Alexandre a l\'air sociable ? vrai ou faux ?',
      type: 'radio',
      options: [
        { value: '', label: 'selectionner...', disabled: true },
        { value: 'vrai', label: 'Vrai' },
        { value: 'faux', label: 'Faux' }
      ]
    },
    {
      id: 'question18',
      text: 'Que reprochez-vous le plus à Alexandre ?',
      type: 'text',
      placeholder: 'Entrez votre réponse...'  
    },
    {
      id: 'question19',
      text: 'Des suggestions pour Alexandre ?',
      type: 'text',
      placeholder: 'Entrez vos suggestions...'
    }

  ];

  const handleAnswerChange = (value) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: value
    });
  };

  const handleNext = () => {
    // Si on termine la question 10 (index 9), afficher la transition
    if (currentQuestion === 9) {
      setTransitionType('after10');
      setShowTransition(true);
    }
    // Si on termine la question 15 (index 14), afficher la transition
    else if (currentQuestion === 14) {
      setTransitionType('after15');
      setShowTransition(true);
    } else if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleContinueAfterTransition = () => {
    setShowTransition(false);
    if (transitionType === 'after10') {
      setCurrentQuestion(10); // Passer à la question 11
    } else if (transitionType === 'after15') {
      setCurrentQuestion(15); // Passer à la question 16
    }
    setTransitionType(null);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    onComplete(answers);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQ.id] || '';

  // Afficher la transition appropriée
  if (showTransition) {
    if (transitionType === 'after10') {
      return <ApresQuestions10 onContinue={handleContinueAfterTransition} />;
    } else if (transitionType === 'after15') {
      return <ApresQuestions15 onContinue={handleContinueAfterTransition} />;
    }
  }

  return (
    <div className="questions">
      <h2>Questionnaire pour {userName}</h2>
      
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Question {currentQuestion + 1} sur {questions.length}
      </p>

      <div className="question-card">
        <div className="question-number">Question {currentQuestion + 1}</div>
        <p className="question-text">{currentQ.text}</p>
        
        {currentQ.type === 'text' ? (
          <input
            type="text"
            value={currentAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder={currentQ.placeholder}
          />
        ) : currentQ.type === 'radio' ? (
          <div className="radio-options">
            {currentQ.options
              .filter((option) => !option.disabled || option.value !== '')
              .map((option) => (
                <label key={option.value} className="radio-label">
                  <input
                    type="radio"
                    name={currentQ.id}
                    value={option.value}
                    checked={currentAnswer === option.value}
                    onChange={(e) => handleAnswerChange(e.target.value)}
                  />
                  <span className="radio-text">{option.label}</span>
                </label>
              ))}
          </div>
        ) : (
          <select
            value={currentAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
          >
            {currentQ.options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="navigation-buttons">
        <button
          className="nav-button previous"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <i class="fa-solid fa-arrow-left"></i>Précédent
        </button>
        
        {currentQuestion < questions.length - 1 ? (
          <button
            className="nav-button next"
            onClick={handleNext}
          >
            Suivant <i class="fa-solid fa-arrow-right"></i>
          </button>
        ) : (
          <button
            className="nav-button submit"
            onClick={handleSubmit}
          >
            Terminer le sondage 
          </button>
        )}
      </div>
    </div>
  );
}

export default Questions;