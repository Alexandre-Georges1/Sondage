import { useState, useEffect } from 'react';
import './style/Survey.css';

function Classement() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    // Récupérer les scores depuis le localStorage
    const storedRankings = localStorage.getItem('surveyRankings');
    if (storedRankings) {
      const parsedRankings = JSON.parse(storedRankings);
      // Trier par score décroissant
      parsedRankings.sort((a, b) => b.score - a.score);
      setRankings(parsedRankings);
    }
  }, []);

  const getMedalIcon = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `#${index + 1}`;
  };

  const getScoreColor = (percentage) => {
    if (percentage === 100) return '#FFD700'; // Or
    if (percentage >= 80) return '#4CAF50'; // Vert
    if (percentage >= 60) return '#2196F3'; // Bleu
    if (percentage >= 40) return '#FF9800'; // Orange
    return '#F44336'; // Rouge
  };


  return (
    <div className="classement">
      <h2>🏆 Classement des participants</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Découvrez qui connaît le mieux Alexandre !
      </p>

      {rankings.length === 0 ? (
        <div className="no-rankings">
          <p style={{ fontSize: '1.2em', color: '#999', textAlign: 'center', padding: '40px' }}>
            😔 Aucun participant pour le moment...
          </p>
          <p style={{ textAlign: 'center', color: '#666' }}>
            Soyez le premier à faire le sondage !
          </p>
        </div>
      ) : (
        <>
          <div className="rankings-stats">
            <div className="stat-card">
              <span className="stat-number">{rankings.length}</span>
              <span className="stat-label">Participants</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {(rankings.reduce((acc, r) => acc + r.percentage, 0) / rankings.length).toFixed(1)}%
              </span>
              <span className="stat-label">Moyenne</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{Math.max(...rankings.map(r => r.percentage)).toFixed(0)}%</span>
              <span className="stat-label">Meilleur score</span>
            </div>
          </div>

          <div className="rankings-list">
            {rankings.map((participant, index) => (
              <div 
                key={index} 
                className={`ranking-item ${index < 3 ? 'podium' : ''}`}
                style={{ 
                  borderLeft: `4px solid ${getScoreColor(participant.percentage)}` 
                }}
              >
                <div className="ranking-position">
                  <span className="medal">{getMedalIcon(index)}</span>
                </div>
                
                <div className="ranking-info">
                  <div className="ranking-name">{participant.name}</div>
                  <div className="ranking-date">
                    {new Date(participant.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>

                <div className="ranking-score">
                  <div className="score-circle" style={{ borderColor: getScoreColor(participant.percentage) }}>
                    <span className="score-percentage">{participant.percentage.toFixed(0)}%</span>
                    <span className="score-detail">{participant.score}/10</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </>
      )}
    </div>
  );
}

export default Classement;
