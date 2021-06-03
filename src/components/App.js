import './App.scss';
import Greetings from './Greetings';
import NavBar from './NavBar';
import Homepage from './Homepage';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import Contacts from './Contacts';
import Footer from './Footer';
import projects from '../data/projects';
import { useEffect, useState } from 'react';

function App() {

  const contentComponents = {
    homepage: <Homepage />,
    projects: <Projects projects={projects}/>,
    about: <About />,
    resume: <Resume />,
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
        <div className="main">
          <NavBar setContent={setContent}/>
          <section className="main__content">
            {contentComponent}
          </section>
          <Footer />
        </div>
        )}
        
    </div>
  );
}

export default App;
