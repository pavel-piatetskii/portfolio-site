import './Greetings.scss';
import { useEffect, useState } from 'react';

export default function Greetings(props) {

  const { setShowGreetings } = props;
  const [greetingArr, setGreetingArr] = useState([]);
  
  const iterateGreeting = function () {

    // Base positions for greetings, organized as 12 zones
    const zones = [
      [5, 3], [15, 25], [3, 45], [20, 70],
      [60, 10], [45, 30], [50, 50], [55, 70],
      [80, 10], [80, 30], [80, 50], [80, 70],
    ];

    const words = ['Hello','Здравствуйте', 'Bonjour', 'Ciao', 
                   'Hola', 'Guten Tag', 'Willkommen', 'Bienvenidos',
                   'Benvenuto', 'Bienvenue', 'Добро пожаловать', 'Welcome'];

    // Iterate through greetings 
    for (const [index, word] of words.entries()) {

      // Randomly choose zone for the current greeting,
      const zone = Math.floor(Math.random() * zones.length);
      let [top, left] = zones[zone];

      // Randomly adjust position coordinates to avoid the "grid effect"
      //top += Math.floor(Math.random() * 15) - 7;
      //left += Math.floor(Math.random() * 6) - 3;

      // Delete the current zone from the set to avoid overlapping
      zones.splice(zone, 1);

      // set timeout to add element for the current greeting with some delay
      setTimeout(() => setGreetingArr(prev => 
        [...prev,
          <p key={word}
            className="greeting__container"
            style={{ top: `${top}vh`, left: `${left}vw` }}
          >{word}</p>]),
        (index + 2) * 250);
      };

    // Disable the Greeting component after all greetings were showed
    setTimeout(() => setShowGreetings(false), 7250)
  };
  
  // Launch iterating function on the Greetings component load
  useEffect(() => {
    iterateGreeting();
  }, []);

  return (
      <div className="greetings">
        {greetingArr.map((gr) => gr)}
      </div>
  );
};



