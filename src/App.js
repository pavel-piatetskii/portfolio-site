import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [showGreeting, setShowGreeting] = useState(true);
  const [greeting, setGreeting] = useState('');
  //const words = ['Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Hello'];

  //const iterateGreeting = function() {
  //  const words = ['Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Hello'];
  //  for (const [index, word] of words.entries()) {
  //    console.log(index, word)
  //    setTimeout(() => setGreeting(word), index * 500)
  //  }
  //};

  const iterateGreeting = function() {
  const words = ['Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Hello'];

  return setTimeout(() => words.map((word) => {
      const x = Math.random() * 60 + 20;
      const y = Math.random() * 60 + 20;
      return <p class="greetings__container" style={{top: `${x}vh`, left: `${y}vh`}}>{word}!</p>
      }), 500)
  };

  //useEffect(() => iterateGreeting(), []);

  //setTimeout(() => setGreeting(false), 1000);

  return (
    <div className="App">
      <header className="App-header">
      {iterateGreeting()}
      {!showGreeting && <p>homepage</p>}
      </header>
    </div>
  );
}

export default App;
