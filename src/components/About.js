import './About.scss';

export default function About(props) {
  
  return (<section class="about">
    <h2 className="about__header">About me</h2>
      <article className="about__container">

        <p>For 8 years I had been working as a Network Engineer. In 2020 I decided to change my career path and to become a Web Developer.</p>

        <p>Programming was not a completely new concept for me. In 2018 I created an 
          <a className="text-link" rel="noreferrer noopener" target="_blank" href="https://github.com/pavel-piatetskii/huawei_autoconfig"> application on Python </a>
        which could compose large configuration files for Huawei switches offering user-friendly GUI instead of editing hundreds lines of text.</p>

        <div className="about__container__img-txt">
          <img
                class="projects__container__preview__image"
                src="diploma.png"
                alt="lighthouse-diploma"
                //onClick={() => setShowImageViewer('diploma.png')}
          />
          <p>However, Web Dev was almost Terra Incognita for me. I spent 3 months in the <a className="text-link" rel="noreferrer noopener" target="_blank" href="https://www.lighthouselabs.ca/">Lighthouse Labs</a> bootcamp. It was a rough, but extremely beneficial experience.</p>
        </div>

        


      </article>
    </section>)
}
