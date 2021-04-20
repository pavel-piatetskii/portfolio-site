import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [showGreeting, setShowGreeting] = useState(true);
  const [greeting, setGreeting] = useState('');

  const iterateGreeting = function() {
    const words = ['Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Hello'];
    for (const [index, word] of words.entries()) {
      console.log(index, word)
      setTimeout(() => setGreeting(word), index * 1000)
    }
  };

  useEffect(() => iterateGreeting(), []);

  //setTimeout(() => setGreeting(false), 1000);

  return (
    <div className="App">
      <header className="App-header">
      {showGreeting && <p>{greeting}!</p>}
      {!showGreeting && <p>homepage</p>}
      </header>
    </div>
  );
}

export default App;
