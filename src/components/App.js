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

import ImageViewer from './ImageViewer/ImageViewer';

import { useEffect, useState } from 'react';

function App() {

  const [content, setContent] = useState('homepage');
  const [showImageViewer, setShowImageViewer] = useState(false);

  const contentComponents = {
    homepage: <Homepage setContent={setContent}/>,
    projects: <Projects projects={projects} showImageViewer={showImageViewer} setShowImageViewer={setShowImageViewer}/>,
    about: <About showImageViewer={showImageViewer} setShowImageViewer={setShowImageViewer}/>,
    resume: <Resume />,
    contacts: <Contacts />,
  };

  const [showGreetings, setShowGreetings] = useState(false);
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
          {showImageViewer && <ImageViewer image={showImageViewer} setShowImageViewer={setShowImageViewer}/>}
        </div>
        )}
    </div>
  );
}

export default App;
