import React from 'react';

function HomePage({ onNavigate }) {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <button onClick={() => onNavigate('display')}>View Data</button>
      <button onClick={() => onNavigate('input')}>Add/Edit Data</button>
      <button onClick={() => onNavigate('auth')}>Logout</button>
    </div>
  );
}

export default HomePage;