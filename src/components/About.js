import './About.scss';

export default function About(props) {

  const { showImageViewer, setShowImageViewer } = props;
  
  return (<section class="about">
    <h2 className="about__header">About me</h2>
      <article className="about__container">

        <p>For 8 years I had been working as a Network Engineer. In 2020 I decided to change my career path and to become a Web Developer.</p>

        <p>Programming was not a completely new concept for me. In 2018 I created an 
          <a className="text-link" rel="noreferrer noopener" target="_blank" href="https://github.com/pavel-piatetskii/huawei_autoconfig"> application on Python </a>
        which could compose large configuration files for Huawei switches offering user-friendly GUI instead of editing hundreds lines of text.</p>

        <div className="about__container__img-txt">
          <img
                class="about__container__img-txt__img"
                src="diploma.png"
                alt="lighthouse-diploma"
                onClick={() => setShowImageViewer('diploma.png')}
          />
          <p className="about__container__img-txt__txt">However, Web Dev was almost Terra Incognita for me. Python application proved that I am able to learn new things on my own, but I needed to learn the most recent and the best coding practices. To do that I spent 1.5 months at the part-time and 3 months at the full-time <a className="text-link" rel="noreferrer noopener" target="_blank" href="https://www.lighthouselabs.ca/">Lighthouse Labs</a> bootcamps. It was a rough, but extremely beneficial experience.</p>
        </div>

        <p>Now I continue to develop new projects, mostly using React.js, but alway implementing something new. My creed is to never stop learning!</p>

        


      </article>
    </section>)
}
