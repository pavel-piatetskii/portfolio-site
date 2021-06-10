import './About.scss';

export default function About(props) {
  return (<section class="about">
    <h2 className="about__header">About me</h2>
      <article className="about__container">
        <p>For 8 years I had been working as a Network Engineer. In 2020 I decided to change my career path and to become a Web Developer</p>
        <p>I spent 3 months in the <a className="text-link" href="https://www.lighthouselabs.ca/">Lighthouse Labs</a> bootcamp. It was a rough but extremely beneficial experience </p>
      </article>
    </section>)
}