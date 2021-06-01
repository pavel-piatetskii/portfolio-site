import './App.scss';
import Greetings from './Greetings';
import NavBar from './NavBar';
import Homepage from './Homepage';
import Projects from './Projects';
import About from './About';
import Contacts from './Contacts';
import { useEffect, useState } from 'react';

function App() {

  const contentComponents = {
    homepage: <Homepage />,
    projects: <Projects />,
    about: <About />,
    contacts: <Contacts />,
  };

  const [showGreetings, setShowGreetings] = useState(true);
  const [content, setContent] = useState('homepage');
  const [contentComponent, setContentComponent] = useState(contentComponents[content]);
  
  useEffect(() => {
    setContentComponent(contentComponents[content]);
  }, [content])

  return (
    <div className="App">
        {showGreetings && <Greetings setShowGreetings={setShowGreetings} />}
        {!showGreetings && (
        <div class="main">
          <NavBar setContent={setContent}/>
          <section class="content">
            {content}
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
