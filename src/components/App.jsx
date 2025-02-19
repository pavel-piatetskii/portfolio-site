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

  
  // State controlling ghreetings component (now disabled for debugging)
  const [showGreetings, setShowGreetings] = useState(false);
  const [contentComponent, setContentComponent] = useState('');  
  
  
  useEffect(() => {
    const contentComponents = {
      homepage: <Homepage setContent={setContent}/>,
      projects: <Projects projects={projects} showImageViewer={showImageViewer} setShowImageViewer={setShowImageViewer}/>,
      about: <About showImageViewer={showImageViewer} setShowImageViewer={setShowImageViewer}/>,
      resume: <Resume />,
      contacts: <Contacts />,
    };
    setContentComponent(contentComponents[content]);
  }, [content, showImageViewer]);


  return (
    <div className="App">
        {/* <div className="background-c"><div className="background-i"></div></div> */}
        <div className="bg-[#285064] inset-0 z-[-1] size-full fixed">
          <div className="opacity-30 bg-van-backgr size-full bg-cover"></div>
        </div>
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
