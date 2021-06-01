import './NavBar.scss';

export default function NavBar(props) {

  const {setContent} = props;

  return (<section class="navbar">
      <div class="navbar__menu">
        <p class="navbar__menu__item" onClick={() => setContent('homepage')}>Home</p>
        <p class="navbar__menu__item" onClick={() => setContent('projects')}>Projects</p>
        <p class="navbar__menu__item" onClick={() => setContent('about')}>About Me</p>
        <p class="navbar__menu__item" onClick={() => setContent('contacts')}>Contacts</p>
      </div>
    </section>)
}