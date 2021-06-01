import './NavBar.scss';

export default function NavBar(props) {
  return (<section class="navbar">
      <div class="navbar__menu">
        <mark class="navbar__menu__item">Home</mark>
        <mark class="navbar__menu__item">Projects</mark>
        <mark class="navbar__menu__item">About Me</mark>
        <mark class="navbar__menu__item">Contacts</mark>
      </div>
    </section>)
}