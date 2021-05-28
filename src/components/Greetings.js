import './Greetings.scss';
import { useEffect, useState } from 'react';

export default function Greetings(props) {

  const [showGreeting, setShowGreeting] = useState(true);
  const [greeting, setGreeting] = useState('');
  const [greetingArr, setGreetingArr] = useState([]);
  const [occupiedZones, setOccupiedZones] = useState([]);
  let OZ = [];
  
  const iterateGreeting = function () {
    const words = ['Hello','Здравствуйте', 'Bonjour', 'Ciao', 'Hola', 'Guten Tag', 'Willkommen',
                   'Bienvenidos', 'Benvenuto', 'Bienvenue', 'Добро пожаловать', 'Welcome'];
    for (const [index, word] of words.entries()) {
      setTimeout(() => setGreeting(word), (index + 2) * 250);
    }
  };
  
  useEffect(() => {
    iterateGreeting();
  }, []);
  useEffect(() => {
    const key = occupiedZones.length;
    const zones = [
      [22, 20], [22, 40], [22, 60], [22, 80],
      [46, 20], [46, 40], [46, 60], [46, 80],
      [70, 20], [70, 40], [70, 60], [70, 80],
    ];
  
    let zone = Math.floor(Math.random() * 12);
    while (occupiedZones.includes(zone) || zone === 1) {
      zone = Math.floor(Math.random() * 12);
      //if (occupiedZones.length === 11) break;
      console.log(`key: ${key}`)
      if (key >= 11) {
        //setGreetingArr(prev => [...prev, <p key={key} className="greeting__container" style={{ top: `${h}vh`, left: `${w}vw` }}>{greeting}</p>])
        zone = 1;
        break;
      }
    };
    console.log(`zone: ${zone}   key: ${key}    occupied: ${occupiedZones}`);
    setOccupiedZones(prev => [...prev, zone])
  
    //const h = Math.round(Math.random() * 20 - 15 + zones[zone][0]);
    //const w = Math.round(Math.random() * 20 - 15 + zones[zone][1]);
    const h = zones[zone][0];
    const w = zones[zone][1];
    //console.log(h, w, zone, greeting);
    //console.log('zones: ', occupiedZones)
    greeting && setGreetingArr(prev => [...prev, <p key={key} className="greeting__container" style={{ top: `${h}vh`, left: `${w}vw` }}>{greeting}</p>])
  }, [greeting]);
  
  //setTimeout(() => setGreeting(false), 1000);

  return (
      <div className="greetings">
        {greeting && greetingArr.map((gr) => gr)}
        {!showGreeting && <p>homepage</p>}
      </div>
  );
};



