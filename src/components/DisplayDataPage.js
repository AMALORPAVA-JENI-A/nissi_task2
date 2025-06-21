import React from 'react';

function DisplayDataPage({ data, onBack }) {
  return (
    <div className="page">
      <h2>Display Data</h2>
      <div className="card-container">
        {data.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default DisplayDataPage;