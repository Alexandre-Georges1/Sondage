import { useState } from 'react';
import './style/Survey.css';

function Identification({ onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name);
    }
  };

  return (
    <div className="identification">
      <h2>Identification</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Avant de commencer, veuillez nous indiquer votre nom
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Votre nom ou pseudo :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez un nom ou pseudo..."
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Continuer <i class="fa-solid fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
}

export default Identification;