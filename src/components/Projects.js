import './Projects.scss';

export default function Projects(props) {

  const { projects } = props;

  return (
    <section class="projects">
      <h2 class="projects__header">Projects</h2>
      {projects.map((project, index) => {
        const {name, image, description, link} = project;
        return (
          <article class="projects__container" key={index}>
            <div class="projects__container__preview">
              <img class="projects__container__preview__image" src={image} alt={name}/>
            </div>
            <div class="projects__container__info">
              <a className="projects__container__info__link" rel="noreferrer noopener" target="_blank" href={link}>
                <h3 class="projects__container__info__name">{name}</h3>
              </a>
              <p class="projects__container__info__description">{description}</p>
            </div>
        </article>
        )}
      )}
    </section>
  )
}