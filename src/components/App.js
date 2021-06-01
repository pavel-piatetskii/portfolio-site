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
        {!showGreetings && (
        <div class="main">
          <NavBar />
          <section class="content">
            <Homepage />
          </section>
          <footer>
            There goes footer
          </footer>
        </div>
        )}
        
    </div>
  );
}

export default App;
