import './App.scss';
import Greetings from './Greetings'
import { useEffect, useState } from 'react';

function App() {

  const [showGreetings, setShowGreetings] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        {showGreetings && <Greetings setShowGreetings={setShowGreetings} />}
        {!showGreetings && <p>homepage</p>}
      </header>
      <div className="main">
      </div>
    </div>
  );
}

export default App;
