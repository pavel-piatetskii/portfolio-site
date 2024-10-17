import './Projects.scss';
import ImageViewer from './ImageViewer/ImageViewer';

// Component with a list of projects
export default function Projects(props) {

  const { projects, showImageViewer, setShowImageViewer } = props;

  return (
    <section className="projects">
      <h2 className="section-header">Projects</h2>
      {projects.map((project, index) => {
        const {name, image, description, techstack, link} = project;
        return (
          <article className="projects__container" key={index}>
            <div className="projects__container__preview">
              <img
                className="projects__container__preview__image"
                src={image}
                alt={name}
                onClick={() => setShowImageViewer(image)}
              />
            </div>
            <div className="projects__container__info">
              <a className="text-link" rel="noreferrer noopener" target="_blank" href={link}>
                <h3 className="projects__container__info__name">{name}</h3>
              </a>
              <p className="projects__container__info__description">{description}</p>
              <p className="projects__container__info__description"><strong><u>Tech stack:</u></strong> {techstack}</p>
            </div>
        </article>
        )}
      )}
      {showImageViewer && <ImageViewer image={showImageViewer} setShowImageViewer={setShowImageViewer}/>}
    </section>
  )
}