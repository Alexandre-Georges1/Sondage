import { useEffect, useRef } from 'react';
import { FaTrophy, FaStar, FaThumbsUp, FaSmile, FaDumbbell, FaCheckCircle, FaTimesCircle, FaChartBar, FaRedo } from 'react-icons/fa';

function Resultats({ userName, answers, onRestart }) {
const currentyear= new Date().getFullYear();
const alexage= currentyear - 2006;
const hasSaved = useRef(false); 
  const correctAnswers = {
    question1: 'KAO Alexandre Georges Essowedeou', 
    question2: alexage.toString(), 
    question3: ['Lome','Lomé','lomé' ],
    question4: 'noir', 
    question5: 'riz_cantonais',
    question6: 'non', 
    question7: 'oui', 
    question8: 'informatique',
    question9: ['IAI', 'IAI-TOGO', 'iai'],
    question10: ['coder','jouer aux jeux vidéo'], 
    question11: '1m90',
    question12: 'Pas de préférence',
    question13: 'oui',
    question14: 'oui',
    question15: 'Investir',
    question16: 'droitier',
    question17: 'vrai',
    question18: '',
    question19: ''
  };

  const questionsText = [
    'Quel est le nom complet d\'Alexandre ?',
    'Quel âge a Alexandre aujourd\'hui ?',
    'Où est né Alexandre ?',
    'Quelle est la couleur préférée d\'Alexandre ?',
    'Quel est le plat préféré d\'Alexandre ?',
    'Alexandre a-t-il un animal de compagnie ?',
    'Alexandre a-t-il le permis de conduire ?',
    'Quel est le domaine d\'études d\'Alexandre ?',
    'Où fréquente-t-il ses études ?',
    'Que fait Alexandre de son temps libre ?',
    'Quelle est la taille d\'Alexandre ?',
    'Il aime les filles claires ou les teints noirs ?',
    'Alexandre est déjà tombé amoureux ?',
    'Alexandre a un crush en ce moment ?',
    'Alexandre a 1 million actuellement. Que ferait-il de cet argent ?',
    'Alexandre est gaucher ou droitier ?',
    'Alexandre a l\'air sociable ? Vrai ou faux ?',
    'Que reprochez-vous le plus à Alexandre ?',
    'Des suggestions pour Alexandre ?'
  ];

  const calculateScore = () => {
    let score = 0;
    Object.keys(correctAnswers).forEach((key) => {
      const userAnswer = answers[key]?.toLowerCase().trim();
      const correctAnswer = correctAnswers[key];
      
      if (Array.isArray(correctAnswer)) {
        if (correctAnswer.some(ans => ans.toLowerCase() === userAnswer)) {
          score++;
        }
      } 
      else if (correctAnswer === '') {
        score++; 
      }
     
      else if (userAnswer === correctAnswer.toLowerCase()) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = (score / Object.keys(correctAnswers).length) * 100;

  useEffect(() => {
    
    if (!hasSaved.current) {
      const rankingData = {
        name: userName,
        score: score,
        percentage: percentage,
        date: new Date().toISOString(),
      };

      const existingRankings = localStorage.getItem('surveyRankings');
      const rankings = existingRankings ? JSON.parse(existingRankings) : [];
      rankings.push(rankingData);
      localStorage.setItem('surveyRankings', JSON.stringify(rankings));
      
      hasSaved.current = true; 
    }
  }, [userName, score, percentage]);

  const getMessage = () => {
    if (percentage === 100) {
      return (
        <>
          <FaTrophy style={{ color: '#FFD700', marginRight: '10px' }} />
          Parfait ! Vous connaissez Alexandre sur le bout des doigts !
        </>
      );
    } else if (percentage >= 80) {
      return (
        <>
          <FaStar style={{ color: '#FFC107', marginRight: '10px' }} />
          Excellent ! Vous connaissez très bien Alexandre !
        </>
      );
    } else if (percentage >= 60) {
      return (
        <>
          <FaThumbsUp style={{ color: '#2196F3', marginRight: '10px' }} />
          Bien ! Vous connaissez assez bien Alexandre !
        </>
      );
    } else if (percentage >= 40) {
      return (
        <>
          <FaSmile style={{ color: '#FF9800', marginRight: '10px' }} />
          Pas mal ! Il reste encore quelques détails à découvrir !
        </>
      );
    } else {
      return (
        <>
          <FaDumbbell style={{ color: '#F44336', marginRight: '10px' }} />
          Continuez à apprendre ! Alexandre a encore des surprises !
        </>
      );
    }
  };

  return (
    <div className="results">
      <h2>Résultats du sondage</h2>
      
      <div className="score-display">
        <p style={{ fontSize: '1.3em', margin: 0 }}>Score de {userName}</p>
        <div className="score">
          {score} / {Object.keys(correctAnswers).length}
        </div>
        <p style={{ fontSize: '1.5em', fontWeight: '600' }}>
          {percentage.toFixed(0)}%
        </p>
        <p style={{ fontSize: '1.2em', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {getMessage()}
        </p>
      </div>

      <div className="results-details">
        <h3 style={{ marginBottom: '20px', color: '#333', display: 'flex', alignItems: 'center' }}>
          <FaChartBar style={{ marginRight: '10px', color: '#667eea' }} />
          Détails de vos réponses
        </h3>
        {Object.keys(answers).map((key, index) => {
          const userAnswer = answers[key]?.toLowerCase().trim();
          const correctAnswer = correctAnswers[key];
          
          // Vérifier si la réponse est correcte
          let isCorrect = false;
          if (Array.isArray(correctAnswer)) {
            isCorrect = correctAnswer.some(ans => ans.toLowerCase() === userAnswer);
          } else if (correctAnswer === '') {
            isCorrect = true; 
          } else {
            isCorrect = userAnswer === correctAnswer.toLowerCase();
          }
          
          return (
            <div key={key} className={`result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
              <p style={{ fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                {isCorrect ? (
                  <FaCheckCircle style={{ color: '#28a745', marginRight: '8px' }} />
                ) : (
                  <FaTimesCircle style={{ color: '#dc3545', marginRight: '8px' }} />
                )}
                Question {index + 1}
              </p>
              <p style={{ color: '#666', marginBottom: '5px', fontSize: '0.95em' }}>
                {questionsText[index]}
              </p>
              <p style={{ margin: '5px 0' }}>
                <strong>Votre réponse :</strong> {answers[key] || 'Non répondu'}
              </p>
              {!isCorrect && correctAnswer !== '' && (
                <p style={{ margin: '5px 0', color: '#28a745', fontSize: '0.9em' }}>
                  <strong>Réponse correcte :</strong>{' '}
                  {Array.isArray(correctAnswer) ? correctAnswer.join(' ou ') : correctAnswer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button className="restart-button" onClick={onRestart}>
        <FaRedo style={{ marginRight: '8px' }} />
        Recommencer le sondage
      </button>
    </div>
  );
}

export default Resultats;
