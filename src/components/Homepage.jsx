import './Homepage.scss';

export default function Homepage(props) {

  const { setContent } = props;

  return (
    <section className="homepage">
      <article className="homepage__greeting-text">
        <h2 className="section-header">Welcome</h2>

        <p className="homepage__greeting-text__paragraph">
            to the website of a Full Stack Developer Pavel Piatetsky!
        </p>
        
        <p className="text-red-900"> 
          {/* homepage__greeting-text__paragraph  */}
          Probably you would like to&nbsp;
          <span className="text-link" onClick={() => setContent('about')}>
            read about me
          </span>
          , see&nbsp;
          <span className="text-link" onClick={() => setContent('projects')}>
            my projects
          </span>
          &nbsp;both completed and WIP, take a look at&nbsp;
          <span className="text-link" onClick={() => setContent('resume')}>
            my resume 
          </span>
          &nbsp;or know how to&nbsp; 
          <span className="text-link" onClick={() => setContent('contacts')}>
            get in touch with me
          </span>
        </p>

      </article>
      <img
        className="homepage__image"
        src="https://avatars.githubusercontent.com/u/69732643?s=400&u=ae52b32192595d5b6df013f692c1bda0a4b93d0c&v=4"
        alt="avatar"
      />
    </section>)
}