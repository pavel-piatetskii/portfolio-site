import './Greetings.scss';
import { useEffect, useState } from 'react';

export default function Greetings(props) {

  const { setShowGreetings } = props;
  const [greetingArr, setGreetingArr] = useState([]);
  
  const iterateGreeting = function () {

    // Base positions for greetings, organized as 12 zones
    const zones = [
      [22, 20], [22, 40], [22, 60], [22, 80],
      [46, 20], [46, 40], [46, 60], [46, 80],
      [70, 20], [70, 40], [70, 60], [70, 80],
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
      top += Math.floor(Math.random() * 15) - 7;
      left += Math.floor(Math.random() * 15) - 7;

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



