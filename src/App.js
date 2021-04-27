import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [showGreeting, setShowGreeting] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [greetingArr, setGreetingArr] = useState([]);
  const xCoords = [];

  const iterateGreeting = function () {
    const words = ['Hello','Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Guten Tag', 'Willkommen',
                   'Bienvenidos', 'Benvenuto', 'Bienvenue', 'Добро пожаловать', 'Welcome' ];
    for (const [index, word] of words.entries()) {
      let x = Math.round(Math.random() * 20) * 5;
      while (xCoords.includes(x)) {
        x = Math.round(Math.random() * 20) * 5;
      }
      console.log(x);
      setTimeout(() => setGreeting(word), (index + 2) * 250);
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
    const key = greetingArr.length;
    
    const x = Math.round(Math.random() * 80 + 10);
    const y = Math.round(Math.random() * 80 + 10);
    console.log(x, y);
    greeting && setGreetingArr(prev => [...prev, <p key={key} className="greeting__container" style={{ top: `${x}vh`, left: `${y}vw` }}>{greeting}</p>])
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
