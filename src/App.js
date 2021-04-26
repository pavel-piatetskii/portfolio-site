import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [showGreeting, setShowGreeting] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [greetingArr, setGreetingArr] = useState([]);
  //const words = ['Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Hello'];

  const iterateGreeting = function () {
    const words = ['Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Hello'];
    for (const [index, word] of words.entries()) {
      console.log(index, word)
      setTimeout(() => setGreeting(word), (index + 2) * 500)
    }
  };

  //const iterateGreeting = function() {
  //const words = ['Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Hello'];
  //const x = Math.random() * 60 + 20;
  //const y = Math.random() * 60 + 20;
  //<p class="greetings__container" style={{top: `${x}vh`, left: `${y}vh`}}>{'word'}!</p> 

  //return setTimeout(() => words.map((word) => {
  //    const x = Math.random() * 60 + 20;
  //    const y = Math.random() * 60 + 20;
  //    return <p class="greetings__container" style={{top: `${x}vh`, left: `${y}vh`}}>{word}!</p>
  //    }), 500)
  //
  //};

  useEffect(() => iterateGreeting(), []);
  useEffect(() => {
    const x = Math.random() * 60 + 20;
    const y = Math.random() * 60 + 20;
    console.log(x, y);
    setGreetingArr(prev => [...prev, <p key={greetingArr.length} className="greetings__container" style={{ top: `${x}vh`, left: `${y}vh` }}>{greeting}!</p>])
  }, [greeting]);

  //setTimeout(() => setGreeting(false), 1000);

  return (
    <div className="App">
      <header className="App-header">
        {greeting && greetingArr.map((gr) => gr)}
        {!showGreeting && <p>homepage</p>}
      </header>
      <div className="main">
      </div>
    </div>
  );
}

export default App;
