import React, { useState, useEffect } from 'react';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import DisplayDataPage from './components/DisplayDataPage';
import InputDataPage from './components/InputDataPage';

function App() {
  const [page, setPage] = useState('auth');
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem('items');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(data));
  }, [data]);

  const navigate = (target) => setPage(target);

  return (
    <div className="app-container">
      {page === 'auth' && <AuthPage onLogin={() => navigate('home')} />}
      {page === 'home' && <HomePage onNavigate={navigate} />}
      {page === 'display' && <DisplayDataPage data={data} onBack={() => navigate('home')} />}
      {page === 'input' && <InputDataPage data={data} setData={setData} onBack={() => navigate('home')} />}
    </div>
  );
}

export default App;