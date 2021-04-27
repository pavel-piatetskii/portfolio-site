import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [showGreeting, setShowGreeting] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [greetingArr, setGreetingArr] = useState([]);
  const [occupiedZones, setOccupiedZones] = useState([]);
  let OZ = [];

  const iterateGreeting = function () {
    const words = ['Hello','Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Guten Tag', 'Willkommen',
                   'Bienvenidos', 'Benvenuto', 'Bienvenue', 'Добро пожаловать'];
    for (const [index, word] of words.entries()) {
      //let x = Math.round(Math.random() * 20) * 5;
      //while (xCoords.includes(x)) {
      //  x = Math.round(Math.random() * 20) * 5;
      //}
      //console.log(x);
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

  useEffect(() => {
    //setOccupiedZones([]);
    iterateGreeting();
  }, []);
  useEffect(() => {
    const key = greetingArr.length;
    const zones = [
      [22, 20], [22, 40], [22, 60], [22, 80],
      [46, 20], [46, 40], [46, 60], [46, 80],
      [70, 20], [70, 40], [70, 60], [70, 80],
    ];

    let zone = Math.floor(Math.random() * 12);
    while (occupiedZones.includes(zone) || zone === 1) {
      zone = Math.floor(Math.random() * 12);
      //if (occupiedZones.length === 11) break;
      console.log(zone)
    };
    setOccupiedZones(prev => [...prev, zone])

    //const h = Math.round(Math.random() * 20 - 15 + zones[zone][0]);
    //const w = Math.round(Math.random() * 20 - 15 + zones[zone][1]);
    const h = zones[zone][0];
    const w = zones[zone][1];
    console.log(h, w, zone, greeting);
    console.log('zones: ', occupiedZones)
    greeting && setGreetingArr(prev => [...prev, <p key={key} className="greeting__container" style={{ top: `${h}vh`, left: `${w}vw` }}>{greeting}</p>])
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
