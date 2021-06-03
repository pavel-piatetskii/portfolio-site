import './Homepage.scss';

export default function Homepage(props) {
  return (<section className="homepage">
      <article className="homepage__greeting-text">
      <h2 className="homepage__greeting-text__header">Welcome</h2>
        <p>to the website of a Full Stack Developer Pavel Piatetskii!</p>
        <p>Probably you would like to read about me, 
            see my projects both completed and WIP, take a look at my resume
            or know how to get in touch with me
        </p>
      </article>
      <img className="homepage__image" src="https://avatars.githubusercontent.com/u/69732643?s=400&u=ae52b32192595d5b6df013f692c1bda0a4b93d0c&v=4"/>
    </section>)
}