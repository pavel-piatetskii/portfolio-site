import './NavBar.scss';

export default function NavBar(props) {

  const {setContent} = props;

  return (<section className="navbar">
      <p className="navbar__menu-item" onClick={() => setContent('homepage')}>Home</p>
      <p className="navbar__menu-item" onClick={() => setContent('projects')}>Projects</p>
      <p className="navbar__menu-item" onClick={() => setContent('about')}>About Me</p>
      <p className="navbar__menu-item" onClick={() => setContent('resume')}>Resume</p>
      <p className="navbar__menu-item" onClick={() => setContent('contacts')}>Contacts</p>
    </section>)
}