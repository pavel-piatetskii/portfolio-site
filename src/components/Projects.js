import './Projects.scss';

export default function Projects(props) {

  const projects = [
    {
      name: 'sample1',
      image: 'https://static.wikia.nocookie.net/civilization/images/8/89/Aztec_%28Civ5%29.png',
      description: 'description1',
      link: 'link1',
    },
    {
      name: 'sample2',
      image: 'https://static.wikia.nocookie.net/civilization/images/8/89/Aztec_%28Civ5%29.png',
      description: 'description2',
      link: 'link2',
    },
  ];

  return (
    <section class="projects">
      <h2 class="projects__header">Projects</h2>
      {projects.map((project) => {
        const {name, image, description, link} = project;
        return (
          <article class="projects__container">
            <img class="projects__container__image" src={image} alt={name}/>
            <div class="projects__container__info">
              <h3 class="projects__container__info__name">{name}</h3>
              <p class="projects__container__info__description">{description}</p>
            </div>
        </article>
        )}
      )}
    </section>
  )
}