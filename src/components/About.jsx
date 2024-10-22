import './About.scss';

export default function About(props) {

  const { setShowImageViewer } = props;
  const diplomaImg = "images/diploma.png"

  return (<section className="about">
    <h2 className="my-8 border-white border-b-2 pb-1 text-lg">About me</h2>
    <article className="flex-col w-[60%] max-w-[1000px] items-start text-left leading-8">

      <p>For 8 years I had been working as a Network Engineer. In 2020 I decided to change my career path and become a Web Developer.</p>

      <p>Programming was not a completely new concept for me. In 2018 I created an
          <a className="text-link" rel="noreferrer noopener" target="_blank" href="https://github.com/pavel-piatetskii/huawei_autoconfig"> application on Python </a>
        which could compose large configuration files for Huawei switches offering user-friendly GUI instead of editing hundreds of lines of text.</p>

      <p className="about__container__img-txt">

        <img
          className="about__container__img-txt__img"
          src={diplomaImg}
          alt="lighthouse-diploma"
          onClick={() => setShowImageViewer(diplomaImg)}
        />
            However, Web Dev was almost Terra Incognita for me. Python application proved that I am able to learn new things on my own, but I needed to learn the most recent and the best coding practices. To do that I spent 1.5 months at the part-time and 3 months at the full-time <a className="text-link" rel="noreferrer noopener" target="_blank" href="https://www.lighthouselabs.ca/">Lighthouse Labs</a> bootcamps. It was a rough, but an extremely beneficial experience.</p>

      <p>Now I continue to develop new projects, mostly using React.js, but always implementing something new. My creed is to never stop learning!</p>




    </article>
  </section>)
}
