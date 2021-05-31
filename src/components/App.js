import './App.scss';
import Greetings from './Greetings';
import NavBar from './NavBar';
import Homepage from './Homepage';
import { useEffect, useState } from 'react';

function App() {

  const [showGreetings, setShowGreetings] = useState(true);

  return (
    <div className="App">
        {showGreetings && <Greetings setShowGreetings={setShowGreetings} />}
        {!showGreetings && <NavBar />}
    </div>
  );
}

export default App;
