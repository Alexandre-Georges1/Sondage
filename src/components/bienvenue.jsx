import './style/Survey.css';

function Bienvenue({ onStart }) {
  return (
    <div className="bienvenue">
      <h1>Bienvenue sur notre sondage pour savoir celui qui connaît le mieux Alexandre !</h1>
      <p>Je suis ravi de vous avoir ici.</p>
      <p>Veuillez répondre aux questions suivantes pour tester vos connaissances.</p>
      <p>Ce sondage contient 19 questions qui vous permettront de découvrir à quel point vous connaissez Alexandre.</p>
      <button className="start-button" onClick={onStart}>
        Commencer le sondage <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Bienvenue;