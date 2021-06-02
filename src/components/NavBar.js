import './NavBar.scss';

export default function NavBar(props) {

  const {setContent} = props;

  return (<section class="navbar">
      <p class="navbar__menu-item" onClick={() => setContent('homepage')}>Home</p>
      <p class="navbar__menu-item" onClick={() => setContent('projects')}>Projects</p>
      <p class="navbar__menu-item" onClick={() => setContent('about')}>About Me</p>
      <p class="navbar__menu-item" onClick={() => setContent('resume')}>Resume</p>
      <p class="navbar__menu-item" onClick={() => setContent('contacts')}>Contacts</p>
    </section>)
}