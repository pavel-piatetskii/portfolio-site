import './App.scss';
import Greetings from './Greetings';
import Homepage from './Homepage';
import { useEffect, useState } from 'react';

function App() {

  const [showGreetings, setShowGreetings] = useState(true);

  return (
    <div className="App">
        {showGreetings && <Greetings setShowGreetings={setShowGreetings} />}
        {!showGreetings && <Homepage />}
    </div>
  );
}

export default App;
